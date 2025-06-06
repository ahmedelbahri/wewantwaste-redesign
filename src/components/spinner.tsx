import { useTheme } from "@/components/theme-provider";

export function Spinner() {
  let { theme } = useTheme();

  if (theme === "system") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return (
    /* From Uiverse.io by TamaniPhiri */
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 border-8 text-[hsl(var(--primary))] text-4xl animate-spin border-[hsl(var(--input))] flex items-center justify-center border-t-[hsl(var(--primary-foreground))] rounded-full">
        {/* import logo svg here */}
        <img src={`/${theme}_logo.svg`} alt="Logo" className="w-16 h-16" />
      </div>
    </div>
  );
}
