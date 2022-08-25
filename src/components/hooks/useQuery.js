import { useCallback, useEffect, useState } from "react";

const useQuery = (callbackFn, config = {}) => {
  const [queryState, setQueryState] = useState({ status: "loading" });

  const getData = useCallback(async () => {
    setQueryState({ status: "loading" });
    try {
      const data = await callbackFn();
      setQueryState({ status: "success", data });
    } catch (error) {
      setQueryState({ status: "error", error });
    }
  }, [callbackFn]);

  useEffect(() => {
    getData();
  }, [getData]);

  const setData = (updateData) => {
    setQueryState({ status: "success", data: updateData });
  };

  return {
    data: queryState.data || config.defaultValue,
    error: queryState.error,
    isLoading: queryState.status === "loading",
    setData,
  };
};

export { useQuery };
