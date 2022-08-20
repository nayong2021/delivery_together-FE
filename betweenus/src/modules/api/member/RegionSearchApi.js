import axios from "axios";

export const RegionSearchApi = async (data) => {
  try {
    const response = await axios.get("https://business.juso.go.kr/addrlink/addrLinkApi.do?keyword=" + data +"&confmKey=U01TX0FVVEgyMDIyMDgyMDIzMjUyNTExMjkwMzI=&resultType=json");
    return response;
  } catch (e) {
    console.log("[FAIL] GET RegionSearch Api", e);
    return e;
  }
};
