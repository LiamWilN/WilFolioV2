import React from "react";
import { MY_NAME, ASPIRE_TOBE } from "../libs/me";

const Title = () => {
  return (
    <div className="pt-4 pb-8">
      <h1 className="text-3xl font-extrabold">{MY_NAME}</h1>
      <h2 className="text-sm">{ASPIRE_TOBE}</h2>
    </div>
  );
};

export default Title;
