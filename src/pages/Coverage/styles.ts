import { styled } from 'styled-components';

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spaccing['sp-10']};

  @media (max-width: 1024px) {
    & {
      padding-top: ${(props) => props.theme.spaccing['sp-4']};
      padding-bottom: ${(props) => props.theme.spaccing['sp-4']};
      padding-left: ${(props) => props.theme.spaccing['sp-1']};
      padding-right: ${(props) => props.theme.spaccing['sp-1']};
    }
  }

  @media (max-width: 768px) {
    gap: ${(props) => props.theme.spaccing['sp-4']};
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
  width: 100%;
  justify-items: center;

  @media (max-width: 830px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
