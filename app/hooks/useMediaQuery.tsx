import { useEffect, useState } from "react";

type MatchesSizes = {
  sm: boolean;
  md: boolean;
  lg: boolean;
};

type WithQueryMatch<T extends { query?: number }> = T extends { query: number }
  ? { queryMatch: boolean }
  : {};

// Key change: define a separate return type with queryMatch
type UseMediaQueryReturnWithQuery = MatchesSizes & { queryMatch: boolean };
type UseMediaQueryReturnWithoutQuery = MatchesSizes;

type UseMediaQueryReturn = Props extends { query: number }
  ? UseMediaQueryReturnWithQuery
  : UseMediaQueryReturnWithoutQuery;

interface Props {
  query?: number;
}

export default function useMediaQuery(props?: Props): UseMediaQueryReturn {
  const [matches, setMatches] = useState<UseMediaQueryReturn>({
    sm: false,
    md: false,
    lg: false,
  });

  const defaultSizes = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  };

  useEffect(() => {
    const initialMatches: UseMediaQueryReturn = {
      sm: !!window.matchMedia(`(min-width: ${defaultSizes.sm})`).matches,
      md: !!window.matchMedia(`(min-width: ${defaultSizes.md})`).matches,
      lg: !!window.matchMedia(`(min-width: ${defaultSizes.lg})`).matches,
      ...(props?.query
        ? {
            queryMatch: !!window.matchMedia(`(min-width: ${props?.query}px)`)
              .matches,
          }
        : {}),
    };

    setMatches(initialMatches);
    const listener = () => setMatches(initialMatches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [props.query]); // Only re-run useEffect when props.query changes

  return matches; // No type assertion needed
}
