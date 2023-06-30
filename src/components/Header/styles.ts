import { styled } from 'styled-components';

export const Container = styled.header`
  position: sticky;
  width: 100%;
  height: 80px;
  box-shadow: ${(props) => props.theme.boxShadow.header};
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndex['z-100']};
  background: ${(props) => props.theme.background.white};
`;

export const Content = styled.nav`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spaccing['sp-1']};
  padding: 13px 16px;
`;
