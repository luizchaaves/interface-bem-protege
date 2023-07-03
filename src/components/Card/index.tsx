import { Container, Description, Header, Title } from './styles';

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: Props) => {
  return (
    <Container>
      <Header>
        {icon}
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
