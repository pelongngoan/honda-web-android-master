"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import SidebarItems from "./SidebarItems";
import Link from "next/link";

import Image from "next/image";

// left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
const SidebarNav = styled.nav`
  background: #e5abab;
  width: 250px;
  height: 123vh;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  margin: 10%;
  background: #f0b2b2;
  text-align: center;
  h1 {
    font-family: "serif";
    color: #c00000;
    font-size: 2rem;
    font-weight: bold;
    text-decoration-thickness: 5px;
  }
  p {
    font-family: "serif";
  }
`;
const SidebarWrap = styled.nav`
  width: 100%;
  margintop: "5rem";
`;
const SidebarItem = styled.div`
  border: 0px solid red;
  filter: white;
  align-items: center;
  font-size: 1rem;
  padding: 16px 0px 16px 0px;
  padding-left: 0;
  transition: all 0.25s ease-in-out;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background: "#E5ABAB";
  background: ${(props: any) => (props.active ? "#E5ABAB" : "")};
  margin: 4px 0px 4px 0;
  border-radius: 4px;
  texr-center: left;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: #c34a36;
  }
  &:active {
    background-color: red;
  }
`;
const SidebarSubItem = styled.div`
  border: 0px solid red;
  filter: white;
  align-items: center;
  font-size: 1rem;
  padding: 16px 0px 16px 0px;
  padding-left: 0;
  transition: all 0.25s ease-in-out;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background: "#E5ABAB";
  background: ${(props: any) => (props.active ? "#E5ABAB" : "")};
  margin: 4px 0px 4px 0;
  border-radius: 4px;
  texr-center: left;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: #c34a36;
  }
  &:active {
    background-color: red;
  }
`;

const Sidebar = () => {
  const [subitems, setSubItems] = useState(false);
  const showSubItems = () => setSubItems(!subitems);

  return (
    <SidebarNav>
      <Logo>
        {" "}
        <h1>HONDA</h1>
        <p className="p1">The Power of Dream</p>
      </Logo>
      <SidebarWrap>
        {SidebarItems.map((item, index) => {
          return (
            <>
              <SidebarItem
                key={item.title}
                onClick={item.subItems && showSubItems}
              >
                {item.icon}
                <p>{item.title}</p>
                <div>
                  {item.subItems && subitems
                    ? item.iconOpened
                    : item.subItems
                    ? item.iconClosed
                    : null}
                </div>
              </SidebarItem>
              {subitems &&
                item.subItems?.map((item, index) => {
                  return (
                    <Link href={item.path}>
                      <SidebarItem key={item.title}>
                        {item.icon}
                        <p>{item.title}</p>
                        <div></div>
                      </SidebarItem>
                    </Link>
                  );
                })}
            </>
          );
        })}
      </SidebarWrap>
    </SidebarNav>
  );
};
export default Sidebar;
