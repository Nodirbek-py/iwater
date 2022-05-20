import styled from "styled-components";

const Nav = styled.nav`
  background: #f1f4f9;
  position: relative;
  display: block;
  box-shadow: 0px 4px 27px -7px rgba(0, 0, 0, 0.15);
  height: 100px;
  margin: 0 auto;
`;

const NavContent = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  @media (min-width: 640px) {
    padding: 0 32px;
  }
  @media (min-width: 1024px) {
    padding: 0 60px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  a {
    margin: 0 12px;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  color: #123a55;
  font-size: 18px;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  background: #f1f4f9;
  width: 100%;
  box-shadow: 0px 10px 15px -7px rgba(0, 0, 0, 0.15);
  padding: 32px 40px;
  a {
    margin: 8px 0;
  }
  button {
    margin: 8px 0;
    width: max-content;
  }
`;

export { Nav, NavContent, NavLinks, NavLink, Dropdown };
