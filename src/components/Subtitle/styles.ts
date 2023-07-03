import { styled } from 'styled-components';

export const Text = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: ${(props) => props.theme.fontWeight.light};

  @media (max-width: 1024px) {
    & {
      font-size: ${(props) => props.theme.fontSize.normal};
    }
  }
`;
