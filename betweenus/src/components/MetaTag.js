import * as React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaTag = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=no"
        />
        <title>우리끼리</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaTag;
