import { ThreeDCard } from "@/app/blocs/3d-card";

import type { Skips } from "@/types/skips";

interface GridLayoutProps {
  data: Skips[] | undefined;
}

function GridLayout({ data }: GridLayoutProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-12 max-w-5xl m-auto pb-45 sm:pb-36">
      {data &&
        data.map((skip) => (
          <ThreeDCard
            id={skip.id}
            key={skip.id}
            title={skip.size.toString() + " Yard Skip"}
            description={skip.hire_period_days + " days hire period"}
            price={`£${skip.price_before_vat}`}
            vat={`£${skip.vat} VAT`}
            imageUrl={`img/${skip.size}-Yard-skip.jpg`}
            buttonText="Select"
            buttonClickedText="Selected"
            imageAlt="thumbnail"
            allowedOnRoad={skip.allowed_on_road}
            allowsHeavyWaste={skip.allows_heavy_waste}
          />
        ))}
    </div>
  );
}

export default GridLayout;
