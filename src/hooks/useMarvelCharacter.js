import { useEffect, useState } from "react";
import { fetchMarvelCharacterByName } from "@/services/marvelApi";

const initialState = {
  status: "idle",
  loading: false,
  error: "",
  data: null,
  attributionText: ""
};

export function useMarvelCharacter(heroName) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!heroName) {
      setState(initialState);
      return undefined;
    }

    const abortController = new AbortController();

    const load = async () => {
      setState({
        status: import.meta.env.VITE_MARVEL_PUBLIC_KEY ? "ready" : "disabled",
        loading: true,
        error: "",
        data: null,
        attributionText: ""
      });

      try {
        const response = await fetchMarvelCharacterByName(heroName, abortController.signal);

        if (response.status === "disabled") {
          setState({
            status: "disabled",
            loading: false,
            error: "",
            data: null,
            attributionText: ""
          });
          return;
        }

        setState({
          status: "ready",
          loading: false,
          error: "",
          data: response.character,
          attributionText: response.attributionText
        });
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        }

        setState({
          status: "ready",
          loading: false,
          error: error instanceof Error ? error.message : "Falha desconhecida",
          data: null,
          attributionText: ""
        });
      }
    };

    load();

    return () => abortController.abort();
  }, [heroName]);

  return state;
}
