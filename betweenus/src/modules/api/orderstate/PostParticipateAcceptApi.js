import axios from "axios";

export const PostParticipateAcceptApi = async (memberIdx, postIdx) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/groupbuying/order/accept?memberIdx=${memberIdx}&postIdx=${postIdx}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};
