import instance from "../ApiInstance";

export const GetFindidApi = async (name, phone, birth, receiptID) => {
  try {
    const { data } = await instance.get(
      `/member/findId?name=${name}&phoneNumber=${phone}&birth=${birth}&receiptID=${receiptID}/`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
