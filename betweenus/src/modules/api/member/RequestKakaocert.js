import instance from "../ApiInstance";

export const RequestKakaocert = async (inputs) => {
  try {
    const { data } = await instance.get(`/member/kakaocert?name=${inputs.name}&birth=${inputs.birth}&phoneNum=${inputs.phoneNumber}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
