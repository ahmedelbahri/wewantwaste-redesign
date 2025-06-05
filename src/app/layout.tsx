import { ModeToggle } from "@/components/mode-toggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-xl m-auto container">
      <div className="">
        <div className="text-right w-full p-3 flex justify-between">
          <img
            src="/rem_waste_management_logo.svg"
            alt="Logo"
            width={36}
            height={36}
          />
          <ModeToggle />
        </div>
      </div>
      <div className="min-h-[calc(100vh-36px-24px)] w-full">{children}</div>
    </div>
  );
};

export default Layout;
