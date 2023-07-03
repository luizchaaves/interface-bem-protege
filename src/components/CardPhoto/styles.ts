import { styled } from 'styled-components';

interface StyledProps {
  img: string;
}

export const Image = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 174px;
  border-radius: 8px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.normal};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${({ img }) => img}), lightgray 50%;
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 325px) {
    width: 225px;
    height: 151px;
  }
`;
