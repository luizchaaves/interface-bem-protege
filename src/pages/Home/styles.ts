import { styled } from 'styled-components';

export const Background = styled.div`
  height: 68vh;
  background: ${(props) => props.theme.background.blue};
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spaccing['sp-4']};

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
  gap: ${(props) => props.theme.spaccing['sp-1']};
  width: 100%;
  z-index: ${(props) => props.theme.zIndex['z-10']};
`;

export const Text = styled.div`
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

export const Button = styled.button`
  padding: ${(props) => props.theme.spaccing['sp-1']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: ${(props) => props.theme.spaccing['sp-0-5']};
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  width: fit-content;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.color.primary};
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.boxShadow.card};
    transition: 0.3s;
  }
`;

export const Image = styled.img`
  max-width: 480px;
  min-width: 350px;
  width: 100%;
  object-fit: contain;
`;

export const Box = styled.div`
  max-width: 928px;
  padding: ${(props) => props.theme.spaccing['sp-2']};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow.card};
  background: ${(props) => props.theme.background.white};
  margin: 0 auto;
  width: -webkit-fill-available;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${(props) => props.theme.zIndex['z-10']};

  @media (max-width: 742px) {
    justify-content: center;
    gap: ${(props) => props.theme.spaccing['sp-1']};
  }
`;
