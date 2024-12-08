import React from "react";
import { MY_NAME, ASPIRE_TOBE } from "../libs/constants";

const Title = () => {
  return (
    <div className="px-4">
      <h1 className="text-xl font-extrabold">{MY_NAME}</h1>
      <h2 className="text-sm">{ASPIRE_TOBE}</h2>
    </div>
  );
};

export default Title;
