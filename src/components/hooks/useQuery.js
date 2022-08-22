import { useCallback, useEffect, useState } from "react";

const useQuery = (callbackFn, defaultValue) => {
  const [response, setResponse] = useState(defaultValue);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await callbackFn();
      setError("");
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [callbackFn]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    isLoading,
    error,
    response,
    setResponse,
  };
};

export { useQuery };
