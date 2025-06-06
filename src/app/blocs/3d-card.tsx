import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SelectorContext } from "@/lib/selector-context";
import { useContext } from "react";
import { CircleAlert } from "lucide-react";

interface ThreeDCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  buttonText: string;
  buttonClickedText: string;
  imageAlt: string;
  vat: string;
  id: number;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
}

export function ThreeDCard({
  title,
  description,
  price,
  imageUrl,
  buttonText,
  buttonClickedText,
  imageAlt,
  vat,
  id,
  allowedOnRoad,
  allowsHeavyWaste,
}: ThreeDCardProps) {
  const context = useContext(SelectorContext);

  return (
    <span
      onClick={() => {
        if (context.selectedSkip === id) context.setSelectedSkip(NaN);
        else context.setSelectedSkip(id);
      }}
    >
      <CardContainer className={`inter-var cursor-pointer p-1`}>
        <CardBody
          className={`relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] ${context.selectedSkip === id ? "bg-gray-100 dark:bg-stone-900 dark:border-white/[0.2] border-black/[0.1]" : "bg-white dark:bg-black dark:border-white/[0.2] border-black/[0.1]"} w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition delay-150 duration-250 ease-in-out`}
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={imageAlt}
            />
            {(allowedOnRoad == false || allowsHeavyWaste == false) && (
              <div className="pt-2 absolute text-yellow-500 flex justify items-center gap-2">
                <CircleAlert />
                <span className="text-xs font-semibold">Warning:</span>
                <span className="text-xs font-normal">
                  This skip is not suitable for{" "}
                  {!allowedOnRoad ? "on-road" : ""}{" "}
                  {!allowedOnRoad && !allowsHeavyWaste ? "and " : ""}
                  {!allowsHeavyWaste ? "heavy waste" : ""} disposal.
                </span>
              </div>
            )}
          </CardItem>
          <div className="flex justify-between items-center mt-15">
            <CardItem
              translateZ={20}
              as="p"
              className="px-4 py-2 rounded-xl font-normal dark:text-white"
            >
              {price}
              &nbsp;
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {vat}
              </span>
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className={`px-4 py-2 rounded-xl bg-black ${context.selectedSkip === id ? "bg-green-500 text-black hover:bg-green-800" : "dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-400"}  text-xs font-bold cursor-pointer `}
            >
              {context.selectedSkip === id ? buttonClickedText : buttonText}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </span>
  );
}
