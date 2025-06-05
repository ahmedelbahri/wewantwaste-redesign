import Layout from "@/app/layout";
import { ThreeDCard } from "@/app/blocs/3d-card";
import { useQuery } from "@tanstack/react-query";
import { getSkipByLocation } from "@/api/skips-by-location";
import { useContext, useEffect, useState } from "react";
import { SelectorContext } from "@/hooks/selector-context";
import { Button } from "@/components/ui/button";

import type { Skips } from "@/types/skips";

// function MobileLayout() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center">
//       <div className="text-right w-full p-3">
//         <Button variant="secondary">Back</Button>
//       </div>
//       <div className="flex min-h-[calc(100vh-36px-24px)] flex-col items-center justify-center">
//         <p className="text-lg font-bold">Mobile Layout</p>
//       </div>
//     </div>
//   );
// }

// function DesktopLayout() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center">
//       <div className="text-right w-full p-3">
//         <Button variant="secondary">Back</Button>
//       </div>
//       <div className="flex min-h-[calc(100vh-36px-24px)] flex-col items-center justify-center">
//         <p className="text-lg font-bold">Desktop Layout</p>
//       </div>
//     </div>
//   );
// }

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
    console.log(selectedSkip, "dsf");
    setSelectedSkip(data?.find((s) => s.id === context.selectedSkip));
  }, [context, data, selectedSkip]);

  return (
    <Layout>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-12 max-w-5xl m-auto pb-45 sm:pb-36">
        {isPending && (
          <div className="flex justify-center items-center">Loading...</div>
        )}
        {isError && (
          <div className="flex justify-center items-center">
            Error: Failed to fetch try to refresh
          </div>
        )}
        {data &&
          data.map((skip) => (
            <ThreeDCard
              id={skip.id}
              key={skip.id}
              title={skip.size.toString() + " Yard Skip"}
              description={skip.hire_period_days + " days hire period"}
              price={`${skip.price_before_vat} £`}
              vat={`VAT ${skip.vat} £`}
              imageUrl={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
              buttonText="Select"
              buttonClickedText="Selected"
              imageAlt="thumbnail"
            />
          ))}
      </div>
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
                <p className="text-sm text-gray-400">
                  <span className="text-green-700">{selectedSkip?.size}</span>{" "}
                  Yard Skip
                </p>
              </div>
              <div>
                <span className="text-2xl font-bold text-green-500">
                  £{selectedSkip?.price_before_vat}
                </span>
                <span className="text-sm text-gray-400 ml-2">14 day hire</span>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-end">
              <Button variant="secondary">Back</Button>
              <Button className="flex items-center gap-2">Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
