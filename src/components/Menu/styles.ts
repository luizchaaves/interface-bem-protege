import { styled } from 'styled-components';

export const Container = styled.div`
  &.menuDesktop {
    display: flex;
    gap: ${(props) => props.theme.spaccing['sp-0-5']};
  }

  &.menuMobile {
    background: ${(props) => props.theme.background.white};
    border-radius: 0px 0px 8px 8px;
    box-shadow: ${(props) => props.theme.boxShadow.header};
    display: block;
    left: 0;
    opacity: 0;
    padding: ${(props) => props.theme.spaccing['sp-1']};
    pointer-events: none;
    position: absolute;
    transform: translateY(-5px);
    width: 100%;
    top: 80px;
    z-index: ${(props) => props.theme.zIndex['z-100']};
    height: 0px;
  }

  &.menuMobileActive {
    opacity: 1;
    pointer-events: initial;
    transform: none;
    height: auto;
    transition: 0.3s;
    z-index: ${(props) => props.theme.zIndex['z-100']};
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: ${(props) => props.theme.spaccing['sp-0-5']};

  @media (max-width: 680px) {
    & {
      flex-direction: column;
    }
  }
`;

export const ElementList = styled.li`
  font-size: ${(props) => props.theme.fontSize.extraSmall};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  padding-top: ${(props) => props.theme.spaccing['sp-1']};
  padding-bottom: ${(props) => props.theme.spaccing['sp-1']};

  &:not(:last-child) {
    border-bottom: 0.5px solid ${(props) => props.theme.background.blue};
  }

  @media (min-width: 680px) {
    &:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.color.black};
  position: relative;
  transition: 0.3s;

  &:after {
    content: '';
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.gradient.blue};
    position: absolute;
    left: 0;
    bottom: -5px;
    margin: 0;
    border: 0;
    transition: width 0.2s;
  }

  &:hover,
  &.activeMenu {
    color: ${(props) => props.theme.color.primary};
  }

  &:hover:after,
  &.activeMenu::after {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: 1px solid transparent;
  color: ${(props) => props.theme.color.primary};
  background: transparent;

  &:after {
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    content: '';
    display: block;
    height: 2px;
    transition: 0.2s;
    width: 1.2rem;
  }

  &.mobileButtonActive::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
