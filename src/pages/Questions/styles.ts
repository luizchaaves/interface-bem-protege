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
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spaccing['sp-1-5']};
  flex-direction: column;
  text-align: center;
`;

export const List = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
