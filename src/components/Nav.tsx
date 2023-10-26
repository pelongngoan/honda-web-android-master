"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as FaIcons from "react-icons/fa";
import { styled } from "styled-components";
import { useState } from "react";

const NavIcon = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  width: 170px;
  text-align: center;
`;
interface INav {
  setDisplay: Dispatch<SetStateAction<boolean>>;
}
const NavParent = styled.div`
  position: ticky;
  background: #ababab;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = (props: INav) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <NavParent>
      <NavIcon>
        <FaIcons.FaBars
          onClick={() => {
            props.setDisplay(!active), setActive(!active);
          }}
        />
      </NavIcon>
      <NavIcon>
        <p>Your Name</p>
        <FaIcons.FaUser></FaIcons.FaUser>
      </NavIcon>
    </NavParent>
  );
};

export default Nav;
