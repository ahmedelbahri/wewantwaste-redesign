import { useState } from "react";
import type { ReactNode } from "react";
import { SelectorContext } from "@/hooks/selector-context";

export const SelectedSkipContext = ({ children }: { children: ReactNode }) => {
  const [selectedSkip, setSelectedSkip] = useState<number>(NaN);

  return (
    <SelectorContext.Provider
      value={{
        selectedSkip: selectedSkip,
        setSelectedSkip: (skipTitle) => setSelectedSkip(skipTitle),
      }}
    >
      {children}
    </SelectorContext.Provider>
  );
};
