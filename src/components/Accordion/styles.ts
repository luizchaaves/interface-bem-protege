import { styled } from 'styled-components';

interface StyledProps {
  isopen: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.background.blue};
  padding: ${(props) => props.theme.spaccing['sp-1-5']} 0px;
  gap: ${(props) => props.theme.spaccing['sp-1-5']};

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.background.blue};
  }
`;

export const Header = styled.dt`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: ${(props) => props.theme.spaccing['sp-1']};
`;

export const Title = styled.span<StyledProps>`
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize.high};
  color: ${({ isopen, theme }) =>
    isopen === 'true' ? theme.color.primary : theme.color.black};

  @media (max-width: 768px) {
    & {
      font-size: ${(props) => props.theme.fontSize.normal};
    }
  }
`;

export const Icon = styled.div<StyledProps>`
  transition: transform 0.3s ease;
  transform: ${({ isopen }) =>
    isopen === 'true' ? 'rotate(0)' : 'rotate(-90deg)'};
`;

export const Description = styled.dd<StyledProps>`
  overflow: hidden;
  display: ${({ isopen }) => (isopen === 'true' ? 'block' : 'none')};
  max-height: ${({ isopen }) => (isopen === 'true' ? '100%' : '0')};

  font-size: ${(props) => props.theme.fontSize.small};
`;
