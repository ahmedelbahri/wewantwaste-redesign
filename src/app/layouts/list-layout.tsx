"use client";

import { useEffect, useId, useRef, useState, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CircleCheck } from "lucide-react";
import { SelectorContext } from "@/lib/selector-context";

import type { Skips } from "@/types/skips";

interface ExpandableCardDemoProps {
  data: Skips[] | undefined;
  selectedSkip: Skips | undefined;
}

export default function ExpandableCardDemo({
  data,
  selectedSkip,
}: ExpandableCardDemoProps) {
  const [active, setActive] = useState<Skips[][number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const context = useContext(SelectorContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 pb-45 sm:pb-36"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-fit max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <div className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg bg-gradient-to-br flex items-center justify-center">
                  <img
                    src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${active.size}-yarder-skip.jpg`}
                    alt={`${active.size} Yard Skip`}
                    className="h-full w-full object-cover rounded-t-xl group-hover/card:shadow-xl"
                  />
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.size} Yard Skip
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.hire_period_days} days hire period
                    </motion.p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        £{active.vat} VAT
                      </span>
                      &nbsp; £{active.price_before_vat}
                    </div>
                    <motion.div
                      layoutId={`button-${active.id}-${id}`}
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white cursor-pointer hover:brightness-90 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (context.selectedSkip === active.id) {
                          context.setSelectedSkip(NaN);
                        } else {
                          context.setSelectedSkip(active.id);
                        }
                      }}
                    >
                      {selectedSkip?.id === active.id ? (
                        <span className="flex items-center gap-2">
                          <CircleCheck />
                          Selected
                        </span>
                      ) : (
                        "Select"
                      )}
                    </motion.div>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div className="space-y-2">
                      <p>
                        <strong>Area:</strong> {active.area}
                      </p>
                      <p>
                        <strong>Postcode:</strong> {active.postcode}
                      </p>
                      <p>
                        <strong>Transport Cost:</strong> £
                        {active.transport_cost?.toFixed(2) || "N/A"}
                      </p>
                      <p>
                        <strong>Per Tonne Cost:</strong> £
                        {active.per_tonne_cost?.toFixed(2) || "N/A"}
                      </p>
                      <p>
                        <strong>Price (before VAT):</strong> £
                        {active.price_before_vat.toFixed(2)}
                      </p>
                      <p>
                        <strong>VAT:</strong> £{active.vat.toFixed(2)}
                      </p>
                      <p>
                        <strong>Total Price:</strong> £
                        {(active.price_before_vat + active.vat).toFixed(2)}
                      </p>
                      <p>
                        <strong>Road Placement:</strong>{" "}
                        {active.allowed_on_road ? "Allowed" : "Not Allowed"}
                      </p>
                      <p>
                        <strong>Heavy Waste:</strong>{" "}
                        {active.allows_heavy_waste
                          ? "Accepted"
                          : "Not Accepted"}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {active.forbidden ? "Unavailable" : "Available"}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 pb-45 sm:pb-36 flex md:!flex flex-wrap">
        {data &&
          data.map((card) => (
            <motion.div
              layoutId={`card-${card.id}-${id}`}
              key={`card-${card.id}-${id}`}
              onClick={() => setActive(card)}
              className={`w-fit md:w-full m-auto p-4 flex flex-col md:flex-row justify-between items-center ${selectedSkip === card ? "bg-neutral-50 dark:bg-neutral-900" : ""} hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer`}
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.id}-${id}`}>
                  <div className="h-40 w-40 md:h-14 md:w-14 rounded-lg bg-gradient-to-br flex items-center justify-center">
                    <img
                      src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${card.size}-yarder-skip.jpg`}
                      className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={card.size + " Yard Skip"}
                    />
                  </div>
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.id}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.size} Yard Skip
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.id}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.hire_period_days} days hire period
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4 md:mt-0">
                <div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    £{card.vat} VAT
                  </span>
                  &nbsp; £{card.price_before_vat}
                </div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (context.selectedSkip === card.id)
                      context.setSelectedSkip(NaN);
                    else context.setSelectedSkip(card.id);
                  }}
                  layoutId={`button-${card.id}-${id}`}
                  className={`cursor-pointer px-4 py-2 text-sm rounded-full font-bold ${selectedSkip === card ? "bg-green-500 text-white hover:brightness-90" : "bg-gray-100"} hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-colors duration-200 ease-in-out`}
                >
                  {selectedSkip === card ? (
                    <span className="flex items-center gap-2">
                      <CircleCheck />
                      Selected
                    </span>
                  ) : (
                    "Select"
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
