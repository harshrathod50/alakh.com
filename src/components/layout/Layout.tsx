import type { FC, PropsWithChildren } from "react";

import Navbar from "./navbar/Navbar";

/**
 * `Layout` arranges static and dynamic parts of a page.
 * @returns `ReactElement`
 */
const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
