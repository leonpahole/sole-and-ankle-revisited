/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content>
        <Header>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" strokeWidth={2} />
          </UnstyledButton>
        </Header>
        <Nav>
          <NavLink isActive href="/sale">
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Backdrop = styled.div`
  background: ${COLORS.gray[700]};
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled(DialogContent)`
  position: relative;
  max-width: 300px;
  margin-left: auto;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 26px 16px 32px 32px;
`;

const Header = styled.header`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => (props.isActive ? COLORS.secondary : COLORS.gray[900])};
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
`;

const Footer = styled.footer`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
`;
