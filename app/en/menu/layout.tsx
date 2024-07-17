import RedirectOnWidth from "./RedirectOnWidth.jsx"; // Adjust the import path as needed
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <RedirectOnWidth />
      {children}
    </div>
  );
};

export default Layout;
