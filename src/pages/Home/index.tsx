// import Section from '../../components/Section';

import {
  Button,
  Content,
  Text,
  Image,
  Background,
  Box,
  Container,
} from './styles';

import theme from '../../styles/theme';

import Section from '../../components/Section';
import Circle from '../../components/Circle';

import Whatsapp from '../../assets/Contact/Whatsapp';
import PhotoInsurance from '../../assets/seguro.webp';
import BrazilMap from '../../assets/Services/BrazilMap';
import Money from '../../assets/Services/Money';
import Hours24 from '../../assets/Services/Hours24';
import Slogan from '../../components/Slogan';

interface Props {
  mobile: boolean;
}

const itensCircle = [
  {
    id: 1,
    icon: <Hours24 size={60} />,
    text: 'Assistência 24H',
  },
  {
    id: 2,
    icon: <BrazilMap />,
    text: 'Cobertura nacional',
  },
  {
    id: 3,
    icon: <Money />,
    text: 'Preço justo',
  },
];

const Home = ({ mobile }: Props) => {
  return (
    <Section id="inicio">
      <Content>
        <Container>
          <Text>
            <Slogan />
            <Button aria-label="Fazer minha cotação">
              Fazer minha cotação
              <Whatsapp size={20} color={theme.color.white} />
            </Button>
          </Text>
          {!mobile && (
            <div>
              <Image src={PhotoInsurance} alt="Imagem seguro de carro" />
            </div>
          )}
        </Container>
        <Box>
          {itensCircle.map((item) => (
            <Circle key={item.id} icon={item.icon} text={item.text} />
          ))}
        </Box>
      </Content>
      <Background />
    </Section>
  );
};

export default Home;
