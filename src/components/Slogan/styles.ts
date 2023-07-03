import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spaccing['sp-1-5']};
  text-align: left;
  align-items: flex-start;

  @media (max-width: 680px) {
    & {
      text-align: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  color: ${(props) => props.theme.color.black};
  font-weight: ${(props) => props.theme.fontWeight.regular};

  @media (max-width: 1024px) {
    & {
      font-size: ${(props) => props.theme.fontSize.large};
    }
  }

  @media (max-width: 1024px) {
    & {
      font-size: 32px;
    }
  }
`;

export const Strong = styled.strong`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color.primary};
`;
