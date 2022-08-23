import { useCallback, useEffect, useState } from "react";

const useQuery = (callbackFn, config = {}) => {
  const [fetchData, setFechData] = useState({ status: "loading" });

  const getData = useCallback(async () => {
    setFechData({ status: "loading" });
    try {
      const data = await callbackFn();
      setFechData({ status: "success", data });
    } catch (error) {
      setFechData({ status: "error", error });
    }
  }, [callbackFn]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    fetchingData: fetchData.data || config.defaultValue,
    error: fetchData.error,
    isLoading: fetchData.status === "loading",
  };
};

export { useQuery };
