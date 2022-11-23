import instance from "../ApiInstance";

export const PostParticipateRefuseApi = async (memberIdx, postIdx) => {
  try {
    const { data } = await instance.post(
      `/groupbuying/order/refuse?memberIdx=${memberIdx}&postIdx=${postIdx}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};
