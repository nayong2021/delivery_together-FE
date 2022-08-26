import axios from "axios";

export const PostParticipationgApi = async (id, data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_HOST}/groupbuying/order/${id.index}`,
      data
    );
    console.log(response);
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
