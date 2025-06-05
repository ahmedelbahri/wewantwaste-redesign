import Layout from "@/app/layout";
import { ThreeDCard } from "@/app/blocs/3d-card";
import { useQuery } from "@tanstack/react-query";
import { getSkipByLocation } from "@/api/skips-by-location";
import { useContext } from "react";
import { SelectorContext } from "@/hooks/selector-context";

function App() {
  const queryParams = {
    postcode: "NR32",
    area: "Lowestoft",
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["skips", queryParams],
    queryFn: () => getSkipByLocation(queryParams),
  });

  const context = useContext(SelectorContext);

  return (
    <Layout>
      {isPending && <p>Loading...</p>}
      {isError && <p>Error: Failed to fetch try to refresh</p>}
      {data &&
        data.map((skip) => (
          <span
            className={`${context.selectedSkip === skip.id ? "blur-[1px]" : ""}`}
            key={skip.id}
          >
            <ThreeDCard
              id={skip.id}
              key={skip.id}
              title={skip.size.toString() + " Yard Skip"}
              description={skip.hire_period_days + " days hire period"}
              price={`${skip.price_before_vat} £`}
              vat={`VAT ${skip.vat} £`}
              imageUrl={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
              buttonText="Select"
              imageAlt="thumbnail"
            />
          </span>
        ))}
    </Layout>
  );
}

export default App;
