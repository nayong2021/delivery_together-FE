import instance from "../ApiInstance";

// export const PostGroupBuyingApi = async (data) => {
//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_API_HOST}/groupbuying`,
//       data
//     );
//     console.log(response);
//   } catch (e) {
//     console.log("[FAIL] GET user data", e);
//     return e;
//   }
// };
export const PostGroupBuyingApi = async (data, storeId) => {
  const requestBody = data;
  requestBody.storeId = storeId;
  try {
    const response = await instance.post(`/groupbuying`, requestBody);
    console.log(response);
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
