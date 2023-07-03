import Subtitle from '../Subtitle';
import { Container, Strong, Title } from './styles';

const Slogan = () => {
  return (
    <Container>
      <Title>
        A proteção veicular <Strong>FÁCIL</Strong>, <Strong>RÁPIDA</Strong> e{' '}
        <Strong>SEM BUROCRÁCIA</Strong>
      </Title>
      <Subtitle text="Encontre a segurança que você precisa em apenas alguns cliques" />
    </Container>
  );
};

export default Slogan;
