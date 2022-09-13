const createClientInstance = () => {
  //   const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_ID = "20dcef83-3228-4826-968e-672c6899eb96";
  const client = new window.TalkPlus.Client({ appId: APP_ID });
  return client;
};

const client = createClientInstance();

export default client;
