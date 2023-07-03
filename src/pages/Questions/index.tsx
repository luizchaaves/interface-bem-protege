import Section from '../../components/Section';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import { Content, Header, List } from './styles';
import Accordion from '../../components/Accordion';

const Questions = () => {
  const questionsList = [
    {
      id: 1,
      title: 'O que é proteção veicular?',
      description:
        'A proteção veicular é uma forma de proteger seu veículo sem um gasto elevado. Esse serviço tem sua cobertura financiada a partir de um rateio. Nesse sistema os associados dividem entre si os custos mensais dos eventos que ocorrem nesse período (roubos, furtos, colisões, entre outros). O valor geralmente é menor que o de um seguro convencional e costuma ser menos burocrático.',
    },
    {
      id: 2,
      title: 'Como Surgiu a Proteção Veicular no Brasil?',
      description:
        'A Proteção Veicular no Brasil surgiu de forma colaborativa, com uma iniciativa popular. A finalidade clara dessa iniciativa é sanar a enorme carência existente em relação à proteção patrimonial, causada pelo caos na segurança pública.',
    },
    {
      id: 3,
      title: 'Quais as vantagens da proteção veicular BEM PROTEGE?',
      description:
        'Aproteção veicular da Bem Protege cobre seus associados em todo território nacional, com assistência 24h. A cobertura inclui roubo ou furto, colisões, incêndio, alagamento, indenização a terceiros, acidentes pessoais, carro reserva emuito mais.',
    },
  ];

  return (
    <Section id="duvidas">
      <Content>
        <Header>
          <Title title="Ficou alguma dúvida?" />
          <Subtitle text="Confira nossa lista de perguntas frequentes" />
        </Header>
        <List>
          {questionsList.map((question) => (
            <Accordion
              key={question.id}
              title={question.title}
              description={question.description}
            />
          ))}
        </List>
      </Content>
    </Section>
  );
};

export default Questions;
