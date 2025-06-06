import Layout from "@/app/layout";
import ListLayout from "@/app/layouts/list-layout";
import GridLayout from "@/app/layouts/grid-layout";
import { useQuery } from "@tanstack/react-query";
import { getSkipByLocation } from "@/api/skips-by-location";
import { useContext, useEffect, useState } from "react";
import { SelectorContext } from "@/lib/selector-context";
import { Button } from "@/components/ui/button";

import type { Skips } from "@/types/skips";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const queryParams = {
    postcode: "NR32",
    area: "Lowestoft",
  };

  const [selectedSkip, setSelectedSkip] = useState<Skips | undefined>();

  const { isPending, isError, data } = useQuery({
    queryKey: ["skips", queryParams],
    queryFn: () => getSkipByLocation(queryParams),
  });

  const context = useContext(SelectorContext);

  useEffect(() => {
    setSelectedSkip(data?.find((s) => s.id === context.selectedSkip));
  }, [context, data, selectedSkip]);

  return (
    <Layout>
      {isPending && (
        <div className="flex justify-center items-center">Loading...</div>
      )}
      {isError && (
        <div className="flex justify-center items-center">
          Error: Failed to fetch try to refresh
        </div>
      )}
      <AnimatePresence mode="wait">
        {context.isGridMode ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GridLayout {...{ data, selectedSkip }} />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ListLayout {...{ data, selectedSkip }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-gray-700 z-50 transition-opacity duration-300 ease-in-out ${selectedSkip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}`}
      >
        <div className="max-w-screen-xl m-auto p-4">
          <div className="mb-3 text-xs text-gray-400 text-center leading-snug">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </div>
          <div className="lg:flex items-center justify-between">
            <div className="flex items-center gap-6 justify-center">
              <div>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  <span className="text-green-700">{selectedSkip?.size}</span>{" "}
                  Yard Skip
                </p>
              </div>
              <div>
                <span className="text-2xl font-bold text-green-500 whitespace-nowrap">
                  £
                  {(selectedSkip?.price_before_vat || 0) +
                    (selectedSkip?.vat || 0)}{" "}
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Including VAT
                  </span>
                </span>
                &nbsp; &nbsp; &nbsp;
                <span className="text-sm text-gray-400 ml-2 whitespace-nowrap">
                  14 day hire
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-end">
              <Button
                className="cursor-pointer"
                variant="secondary"
                onClick={() => context.setSelectedSkip(NaN)}
              >
                Clear
              </Button>
              <Button className="flex items-center gap-2 cursor-pointer">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
