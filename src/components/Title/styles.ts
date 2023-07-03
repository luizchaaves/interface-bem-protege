import { styled } from 'styled-components';

export const Text = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color.primary};
  text-transform: uppercase;

  @media (max-width: 768px) {
    & {
      font-size: ${(props) => props.theme.fontSize.large};
    }
  }
  @media (max-width: 300px) {
    & {
      font-size: 32px;
    }
  }
`;
