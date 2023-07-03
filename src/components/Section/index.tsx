import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  id: string;
  children: ReactNode;
}

const Section = ({ children, id }: Props) => {
  return <Container id={id}>{children}</Container>;
};

export default Section;
