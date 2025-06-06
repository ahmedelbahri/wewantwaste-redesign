import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useContext } from "react";
import { SelectorContext } from "@/lib/selector-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  let { theme } = useTheme();

  if (theme === "system") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const context = useContext(SelectorContext);

  return (
    <div className="max-w-screen-xl m-auto container">
      <div className="">
        <div className="text-right w-full p-3 flex justify-between">
          <img src={`/${theme}_logo.svg`} alt="Logo" width={50} height={50} />
          <div className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode">Grid Mode</Label>
            <Switch
              id="airplane-mode"
              checked={!context.isGridMode}
              onCheckedChange={(checked) => context.setIsGridMode(!checked)}
            />
            <Label htmlFor="airplane-mode">List Mode</Label>
          </div>
          <ModeToggle />
        </div>
      </div>
      <div className="min-h-[calc(100vh-38px-24px)] w-full">{children}</div>
    </div>
  );
};

export default Layout;
