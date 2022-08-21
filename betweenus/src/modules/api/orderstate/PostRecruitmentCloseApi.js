import axios from "axios";

export const PostRecruitmentCloseApi = async (index) => {
  try {
    const { data } = await axios.post(`/api/groupbuying/recruitmentClose/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};