import { useEffect, useState } from "react";

interface MatchesSizes {
  sm: boolean;
  md: boolean;
  lg: boolean;
  queryMatch?: boolean;
}

interface Props {
  query?: number;
}

export default function useMediaQuery(props?: Props) {
  const [matches, setMatches] = useState<
    Props extends { query: number }
      ? MatchesSizes & { queryMatch: boolean }
      : MatchesSizes
  >({
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
    const initialMatches: Props extends { query: number }
      ? MatchesSizes & { queryMatch: boolean }
      : MatchesSizes = {
      sm: !!window.matchMedia(`(min-width: ${defaultSizes.sm})`).matches,
      md: !!window.matchMedia(`(min-width: ${defaultSizes.md})`).matches,
      lg: !!window.matchMedia(`(min-width: ${defaultSizes.lg})`).matches,
      queryMatch: props?.query
        ? !!window.matchMedia(`(min-width: ${props?.query}px)`).matches
        : false,
    };

    if (JSON.stringify(initialMatches) !== JSON.stringify(matches)) {
      setMatches(initialMatches);
    }
    const listener = () => setMatches(initialMatches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, props?.query]);

  return matches!;
}
