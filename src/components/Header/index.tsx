import { Container, Content } from './styles';
import Logo from '../Logo';
import Menu from '../Menu';

interface Props {
  mobile: boolean;
}

const Header = ({ mobile }: Props) => {
  return (
    <Container>
      <Content>
        <h1>
          <Logo />
        </h1>
        <Menu mobile={mobile} />
      </Content>
    </Container>
  );
};

export default Header;
