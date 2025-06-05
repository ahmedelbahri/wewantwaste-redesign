import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ThreeDCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  buttonText: string;
  imageAlt: string;
  vat: string;
}

export function ThreeDCard({
  title,
  description,
  price,
  imageUrl,
  buttonText,
  imageAlt,
  vat,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="30"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="40" className="w-full mt-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={imageAlt}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-15">
          <CardItem
            translateZ={30}
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
            translateZ={30}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-400"
          >
            {buttonText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
