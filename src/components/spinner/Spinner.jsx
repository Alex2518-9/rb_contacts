import React from "react";
import { Audio } from "react-loader-spinner";

const Spinner = () => {


  return (
    <>
        <div>
          <Audio
            height="150"
            width="150"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
    </>
  );
};

export default Spinner;
