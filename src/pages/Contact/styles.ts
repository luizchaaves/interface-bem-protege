import { styled } from 'styled-components';

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 1024px) {
    & {
      padding-top: ${(props) => props.theme.spaccing['sp-4']};
      padding-bottom: ${(props) => props.theme.spaccing['sp-4']};
      padding-left: ${(props) => props.theme.spaccing['sp-1']};
      padding-right: ${(props) => props.theme.spaccing['sp-1']};
    }
  }

  @media (max-width: 768px) {
    & {
      justify-content: center;
      flex-direction: column;
      gap: ${(props) => props.theme.spaccing['sp-4']};
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.theme.spaccing['sp-2']};
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spaccing['sp-1']};
`;

export const Link = styled.a`
  position: relative;

  &:after {
    content: '';
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.gradient.blue};
    position: absolute;
    left: 0;
    bottom: 0px;
    margin: 0;
    border: 0;
    transition: width 0.2s;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover svg {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: ${(props) => props.theme.spaccing['sp-4']};

  @media (max-width: 768px) {
    & {
      align-items: center;
    }
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.fontSize.normal};

  &.atendimento {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};

    & strong {
      font-size: ${(props) => props.theme.fontSize.high};
      margin-left: ${(props) => props.theme.spaccing['sp-0-5']};
    }
  }

  &.endereco {
    max-width: 356px;
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  &.contato {
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  @media (max-width: 390px) {
    &.atendimento strong {
      font-size: ${(props) => props.theme.fontSize.normal};
    }

    &.endereco {
      font-size: ${(props) => props.theme.fontSize.small};
    }
  }

  @media (max-width: 330px) {
    &.atendimento,
    &.atendimento strong,
    &.endereco {
      font-size: ${(props) => props.theme.fontSize.small};
    }

    &.contato {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
    }
  }
`;
