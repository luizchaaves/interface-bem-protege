import { styled } from 'styled-components';

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    & {
      padding-top: ${(props) => props.theme.spaccing['sp-4']};
      padding-bottom: ${(props) => props.theme.spaccing['sp-4']};
      padding-left: ${(props) => props.theme.spaccing['sp-1']};
      padding-right: ${(props) => props.theme.spaccing['sp-1']};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: ${(props) => props.theme.spaccing['sp-4']};
      justify-content: center;
    }
  }
`;

export const Image = styled.img`
  width: 412px;
  transition: 0.3s;

  @media (max-width: 1024px) {
    & {
      width: 300px;
    }
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.high};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.color.black};
  text-align: right;

  & strong {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.color.primary};
  }

  @media (max-width: 900px) {
    & {
      font-size: ${(props) => props.theme.fontSize.normal};
    }
  }
  @media (max-width: 768px) {
    & {
      text-align: center;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${(props) => props.theme.spaccing['sp-4']};

  & ${Text}:first-child {
    max-width: 580px;
  }
  & ${Text}:last-child {
    max-width: 426px;
  }

  @media (max-width: 768px) {
    & {
      align-items: center;
    }
  }
`;
