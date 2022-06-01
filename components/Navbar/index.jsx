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
    { title: "Home", href: "/" },
    { title: "How it Works?", href: "#how" },
    { title: "Product", href: "#product" },
    { title: "Features", href: "#features" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Our Team", href: "#team" },
  ];

  return (
    <Nav>
      <NavContent>
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            width="130"
            height="73"
            alt="iWater - Logo"
          />
        </Link>
        {width > 1024 ? (
          <NavLinks>
            {navigation.map((nav, i) => (
              <Link href={nav.href} key={i}>
                <NavLink style={i === 0 ? { fontWeight: "bold" } : {}}>
                  {nav.title}
                </NavLink>
              </Link>
            ))}
          </NavLinks>
        ) : (
          open && (
            <Dropdown>
              {navigation.map((nav, i) => (
                <Link href={nav.href} key={i}>
                  <NavLink style={i === 0 ? { fontWeight: "bold" } : {}}>
                    {nav.title}
                  </NavLink>
                </Link>
              ))}
              <Button href="/pricing/" text="Buy Now" />
            </Dropdown>
          )
        )}
        {width > 1024 && <Button href="/pricing/" text="Buy Now" />}
        <Hamburger status={open} handler={setOpen} />
      </NavContent>
    </Nav>
  );
};

export default Navbar;
