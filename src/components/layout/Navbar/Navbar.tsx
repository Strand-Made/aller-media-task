import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--red-2);
  padding: 1rem;
  width: 100%;
  color: var(--gray-1);

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

const Logo = styled.span`
  font-size: var(--step-0);
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <div>
        <Logo>Aller Media Interview Task</Logo>
      </div>
      <NavList>
        <li>By Stian</li>
        <li>
          <a href="https://www.stianstrand.dev">My Portfolio</a>
        </li>
        <li>
          <a href="https://github.com/Strand-Made">My Github</a>
        </li>
      </NavList>
    </NavbarStyled>
  );
};

export default Navbar;
