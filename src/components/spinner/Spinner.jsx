import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Audio } from "react-loader-spinner";

const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress ? (
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
      ) : null}
    </>
  );
};

export default Spinner;
