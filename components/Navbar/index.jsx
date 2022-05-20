import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Nav, NavContent, NavLink, NavLinks, Dropdown } from "./style";
import Button from "../../shared/button";
import Hamburger from "./components/Hamburger";
import useWindowDimensions from "./hook";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const navigation = [
    "Home",
    "How it Works?",
    "Product",
    "Features",
    "Testimonials",
    "Our Team",
  ];

  return (
    <Nav>
      <NavContent>
        <Link href="http://localhost:3000/">
          <Image src="/icons/logo.svg" width="130" height="73" />
        </Link>
        {width > 1024 ? (
          <NavLinks>
            {navigation.map((nav, i) => (
              <Link href={"#" + nav} key={i}>
                <NavLink style={i === 0 ? { fontWeight: "bold" } : {}}>
                  {nav}
                </NavLink>
              </Link>
            ))}
          </NavLinks>
        ) : (
          open && (
            <Dropdown>
              {navigation.map((nav, i) => (
                <Link href={"#" + nav} key={i}>
                  <NavLink style={i === 0 ? { fontWeight: "bold" } : {}}>
                    {nav}
                  </NavLink>
                </Link>
              ))}
              <Button text="Buy Now" />
            </Dropdown>
          )
        )}
        {width > 1024 && <Button text="Buy Now" />}
        <Hamburger status={open} handler={setOpen} />
      </NavContent>
    </Nav>
  );
};

export default Navbar;
