import { createContext } from "react";

interface SelectorContextType {
  selectedSkip: number;
  setSelectedSkip: (skipTitle: number) => void;
  isGridMode: boolean;
  setIsGridMode: (gridMode: boolean) => void;
}

export const SelectorContext = createContext<SelectorContextType>({
  selectedSkip: NaN,
  setSelectedSkip: () => {},
  isGridMode: true,
  setIsGridMode: () => {},
});
