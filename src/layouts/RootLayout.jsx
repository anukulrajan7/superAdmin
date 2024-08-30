import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="max-w-[3400px] flex-1 ">{children}</main>
    </div>
  );
}

export default RootLayout;
