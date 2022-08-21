import * as React from "react";
import { ReactComponent as Mark2 } from "../../assets/img/ico_mark2.svg";

export default function ChatItem({
    modalActivate,
    onClickRefuse,
    onClickBack
}) {
  return (
    modalActivate ? (
        <div className="dim-layer dim-layer-on js-modal">
            <div className="dim-bg"></div>
            <div id="layer" className="modal-layer">
                <div className="modal-container">
                <div className="modal-message">
                    <Mark2 className="ico"/>
                    
                    <div className="tit-group">
                    <div className="tit">게스트 주문 거절</div>
                    <div className="txt">게스트의 주문을 거절할 시에 <br/>되돌릴 수 없습니다.</div>
                    </div>
                    
                    <div className="btn-group-modal">
                    <button type="button" className="btn btn-custom js-modal-master-close" onClick={onClickRefuse}>주문 거절</button>
                    <button type="button" className="btn btn-custom btn-custom-v1 js-modal-master-close" onClick={onClickBack}>돌아가기</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    ) : (
        null
    )
  );
}
