import Section from '../../components/Section';
import { Container, ContainerText, Content, Image, Text } from './styles';
import GusttavoLimaPhoto from '../../assets/GusttavoLima.webp';

const About = () => {
  return (
    <Section id="sobre">
      <Content>
        <Container>
          <Image src={GusttavoLimaPhoto} alt="Foto do Gusttavo Lima" />
          <ContainerText>
            <Text>
              Somos uma <strong>Associação</strong> com foco em{' '}
              <strong>Gestão de Benefícios</strong>. Oferecemos aos nossos
              Beneficiários o Programa de Reposição de Perdas (PRP) contra
              colisão, roubo, furto e incêndio, com serviço de Assistência 24 h
              em todo território nacional, gerando tranquilidade e segurança aos
              nossos usuários
            </Text>
            <Text>
              Nosso CNPJ 10.476.457/0001-20 com maisde 10 anos protegendo sonhos
            </Text>
          </ContainerText>
        </Container>
      </Content>
    </Section>
  );
};

export default About;
