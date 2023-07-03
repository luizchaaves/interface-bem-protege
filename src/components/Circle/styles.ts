import { styled } from 'styled-components';

export const Container = styled.div`
  width: 210px;
  height: 210px;
  background: ${(props) => props.theme.background.blue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spaccing['sp-1']};

  @media (max-width: 370px) {
    & {
      width: 120px;
      height: 120px;
      gap: ${(props) => props.theme.spaccing['sp-0-5']};
    }
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;

  @media (max-width: 370px) {
    &,
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Text = styled.div`
  max-width: 118px;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.normal};
  color: ${(props) => props.theme.color.primary};

  @media (max-width: 370px) {
    & {
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.regular};
    }
  }
`;
