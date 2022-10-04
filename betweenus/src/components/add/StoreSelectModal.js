import * as React from "react";
import { useState, useEffect } from "react";
import { GetYogiyoStoreListApi } from "../../modules/api/add/GetYogiyoStoreListApi";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import useDrag from "./useDrag";
import Store from "./Store";
import { useInView } from "react-intersection-observer";

const categories = [
  { id: "전체", sendToApi: "" },
  { id: "1인분주문", sendToApi: "1인분주문" },
  { id: "치킨", sendToApi: "치킨" },
  { id: "버거", sendToApi: "버거" },
  { id: "한식", sendToApi: "한식" },
  { id: "일식/돈까스", sendToApi: "일식돈까스" },
  { id: "족발/보쌈", sendToApi: "족발보쌈" },
  { id: "중국집", sendToApi: "중식" },
  { id: "분식", sendToApi: "분식" },
  { id: "아시안", sendToApi: "아시안" },
  { id: "피자/양식", sendToApi: "피자양식" },
  { id: "카페/디저트", sendToApi: "카페디저트" },
  { id: "샐러드", sendToApi: "샐러드" },
  { id: "도시락/죽", sendToApi: "도시락죽" },
  { id: "찜/탕", sendToApi: "찜탕" },
  { id: "고기/구이", sendToApi: "고기구이" },
  { id: "회/초밥", sendToApi: "회초밥" },
  { id: "샌드위치", sendToApi: "샌드위치" },
  { id: "야식", sendToApi: "야식" },
  { id: "편의점", sendToApi: "편의점" },
  { id: "프랜차이즈", sendToApi: "프랜차이즈" },
];

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      tabIndex={0}
      className={`category-card` + (selected ? ` selected-card` : "")}
    >
      {title}
    </div>
  );
}

const onWheel = (apiObj, ev) => {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
};

export default function StoreSelectModal({
  open,
  setOpenStoreSelect,
  selectedStore,
  setSelectedStore,
}) {
  const [items, setItems] = useState(categories);
  const [page, setPage] = useState(0);
  // const [storeSearchWord, setStoreSearchWord] = useState("");

  const [stores, setStores] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleItemClick = (category) => () => {
    if (dragging) {
      return false;
    }
    setPage(0);
    setSelectedCategory(category);
  };
  const onBackBtnClick = () => {
    setOpenStoreSelect(false);
    setSelectedStore({});
  };

  const onStoreClick = (store) => {
    setSelectedStore(store);
  };

  const onDecisionBtnClick = () => {
    setOpenStoreSelect(false);
  };

  const getStoreList = async () => {
    try {
      const result = await GetYogiyoStoreListApi(
        selectedCategory.sendToApi,
        page
      );
      setStores(result.data.restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreList = async () => {
    const result = await GetYogiyoStoreListApi(
      selectedCategory.sendToApi,
      page
    );
    setStores([...stores, ...result.data.restaurants]);
  };

  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  // const handleStoreSearchWordChange = (e) => {
  //   setStoreSearchWord(e.target.value);
  // };

  // const handleStoreSearchWordClear = () => {
  //   setStoreSearchWord("");
  // };

  // const onKeyEnter = async (e) => {
  //   if (e.key === "Enter") {
  //     try {
  //       const result = await GetYogiyoStoreListApi(
  //         selectedCategory.sendToApi,
  //         page,
  //         storeSearchWord
  //       );
  //       console.log(storeSearchWord);
  //       console.log(result);
  //       setStores(result.data.restaurants);
  //       setStoreSearchWord("");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  useEffect(() => {
    getStoreList();
  }, [selectedCategory]);

  useEffect(() => {
    if (page !== 0) {
      getMoreList();
    }
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <div className={`dim-layer js-modal` + (open ? ` dim-layer-on` : "")}>
      <div className="menu-popup">
        <div className="header">
          <div className="hd">
            <div className="hd-tit">
              <button
                type="button"
                className="hd-back"
                onClick={onBackBtnClick}
              ></button>
              매장 찾기
            </div>
          </div>
          <div className="store-categories">
            <div onMouseLeave={dragStop}>
              <ScrollMenu
                onWheel={onWheel}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
              >
                {items.map((item) => (
                  <Card
                    itemId={item.id} // NOTE: itemId is required for track items
                    title={item.id}
                    key={item.id}
                    onClick={handleItemClick(item)}
                    selected={item.id === selectedCategory.id}
                  />
                ))}
              </ScrollMenu>
            </div>
          </div>
          {/* <div className="store-search">
            <input
              type="text"
              placeholder="모집글 검색"
              className="inp-frm"
              onKeyPress={onKeyEnter}
              onChange={handleStoreSearchWordChange}
              value={storeSearchWord}
            />
            <button
              type="button"
              className="btn-delete"
              onClick={handleStoreSearchWordClear}
            ></button>
            <div>여기가 정렬기준 넣을 곳</div>
          </div> */}
        </div>
        <section className="store-select">
          <div className="wrap">
            <ol className="store-list">
              {stores
                ? stores.map((store, idx) => (
                    <Store
                      key={idx}
                      store={store}
                      onStoreClick={onStoreClick}
                      selected={selectedStore.id === store.id}
                    />
                  ))
                : null}
              <li ref={ref} />
            </ol>
          </div>
          <div className="btn-group-bottom">
            <button className="btn-custom" onClick={onDecisionBtnClick}>
              매장 선택
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
