import { createContext } from "react";

interface SelectorContextType {
  selectedSkip: number;
  setSelectedSkip: (skipTitle: number) => void;
}

export const SelectorContext = createContext<SelectorContextType>({
  selectedSkip: NaN,
  setSelectedSkip: () => {},
});
