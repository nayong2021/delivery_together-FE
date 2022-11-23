import instance from "../ApiInstance";

export const PostParticipationgApi = async (id, data) => {
  try {
    const response = await instance.post(
      `/groupbuying/order/${id.index}`,
      data
    );
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
