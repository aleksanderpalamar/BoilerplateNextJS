import { NavbarContainer } from "./NavbarContainer";
import { NavbarItem } from "./NavbarItem";
import { NavbarLink } from "./NavbarLink";

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarItem>
        <NavbarLink href="/">Home</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="/about">About</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarItem>
    </NavbarContainer>
  );
}