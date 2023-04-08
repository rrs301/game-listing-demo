import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Switch,
} from "@chakra-ui/react";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import SideNavGenreList from "./SideNavGenreList";
function Header() {
  const [toggle,setToggle]=useState(false);
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />

      <InputGroup className="mx-8">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="text" variant="filled" placeholder="Search" borderRadius={50} />
      </InputGroup>
      
      {/* <Switch id="theme"  /> */}
      <HiOutlineBars3CenterLeft className="text-[30px]" />
      {toggle?
      <div>
         <SideNavGenreList/>
        </div>
       
      :null}
      {/* <label className="ml-2">Dark</label> */}
    </div>
  );
}

export default Header;
