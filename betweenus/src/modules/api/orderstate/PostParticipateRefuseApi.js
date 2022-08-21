import axios from "axios";

export const PostParticipateRefuseApi = async (memberIdx, postIdx) => {
  try {
    const { data } = await axios.post(`/api/groupbuying/order/refuse?memberIdx=${memberIdx}&postIdx=${postIdx}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};
