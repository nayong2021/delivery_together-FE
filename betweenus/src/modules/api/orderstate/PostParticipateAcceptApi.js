import instance from "../ApiInstance";

export const PostParticipateAcceptApi = async (memberIdx, postIdx) => {
  try {
    const { data } = await instance.post(
      `/groupbuying/order/accept?memberIdx=${memberIdx}&postIdx=${postIdx}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};
