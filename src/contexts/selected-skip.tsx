import { useState } from "react";
import type { ReactNode } from "react";
import { SelectorContext } from "@/lib/selector-context";

export const SelectedSkipContext = ({ children }: { children: ReactNode }) => {
  const [selectedSkip, setSelectedSkip] = useState<number>(NaN);
  const [isGridMode, setIsGridMode] = useState<boolean>(true);

  return (
    <SelectorContext.Provider
      value={{
        selectedSkip: selectedSkip,
        setSelectedSkip: (skipTitle) => setSelectedSkip(skipTitle),
        isGridMode: isGridMode,
        setIsGridMode: (gridMode) => setIsGridMode(gridMode),
      }}
    >
      {children}
    </SelectorContext.Provider>
  );
};
