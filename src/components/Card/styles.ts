import { styled } from 'styled-components';

export const Container = styled.div`
  height: 396px;
  max-width: 275px;
  padding: 64px 24px 24px;
  background: ${(props) => props.theme.background.white};
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
  display: flex;
  gap: 56px;
  flex-direction: column;

  @media (max-width: 600px) {
    & {
      padding: 32px 8px 8px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spaccing['sp-1']};
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.normal};
  color: ${(props) => props.theme.color.primary};
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  text-align: center;
`;
