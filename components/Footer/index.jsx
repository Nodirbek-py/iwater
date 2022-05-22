import Image from "next/image";
import Link from "next/link";

import {
  FooterColumn,
  FooterContent,
  FooterWrapper,
  FooterCopyright,
  FooterHeading,
  FooterLink,
} from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <Image
            src="/icons/logo.svg"
            height="110"
            width="195"
            alt="iWater - Logo"
          />
          <FooterCopyright>© 2022 iWater. All rights reserved.</FooterCopyright>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink>
            <Link href="/">Home</Link>
          </FooterLink>
          <FooterLink>
            <Link href={"/#How it Works?"}>How it Works?</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Product">Product</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Features">Features</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Testimonials">Testimonials</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Our Team">Our Team</Link>
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink>
            <Link href="/">Home</Link>
          </FooterLink>
          <FooterLink>
            <Link href={"/#About us"}>About us</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Contact us">Contact us</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Policy Privacy">Policy Privacy</Link>
          </FooterLink>
          <FooterLink>
            <Link href="/#Terms of use">Terms of use</Link>
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink>info@iwater.tech</FooterLink>
          <FooterLink>000 000 0000</FooterLink>
          <FooterLink>lorem ipsum</FooterLink>
        </FooterColumn>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
