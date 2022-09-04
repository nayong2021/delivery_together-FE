import instance from "../ApiInstance";

export const GetFindidApi = async (name, phone, birth) => {
  try {
    const { data } = await instance.get(
      `/member/findId?name=${name}&phoneNumber=${phone}&birth=${birth}/`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
