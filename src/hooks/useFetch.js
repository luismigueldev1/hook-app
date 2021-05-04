import { useEffect, useRef, useState } from "react";

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        isMounted.current &&
          setTimeout(() => {
            setState({
              data: data,
              loading: false,
              error: null,
            });
          }, 4000);
      })
      .catch(() => {
        isMounted.current &&
          setState({
            data: null,
            loading: false,
            error: "No se pudo cargar la info",
          });
      });
  }, [url]);
  return state;
}
