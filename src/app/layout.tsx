import { ModeToggle } from "@/components/mode-toggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-xl m-auto container">
      <div className="">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="text-right w-full p-3">
            <ModeToggle />
          </div>
          <div className="flex min-h-[calc(100vh-36px-24px)] flex-row flex-wrap gap-x-10 items-center justify-evenly">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
