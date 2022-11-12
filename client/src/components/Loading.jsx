import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <ReactLoading type="spin" width={150} height={150} color="#27ae60" />
    </div>
  );
};

export default Loading;
