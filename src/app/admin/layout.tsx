"use client";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

import { ReactNode, useState } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {display ? <Sidebar /> : undefined}
      <div style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
        <Nav setDisplay={setDisplay} />
        <main>{props.children}</main>
      </div>
    </div>
  );
};
// {/* <main className="w-full">{props.children}</main> */}
export default layout;
