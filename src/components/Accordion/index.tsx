import { useState } from 'react';
import { Container, Description, Header, Icon, Title } from './styles';
import { StyleSheetManager } from 'styled-components';
import Arrow from '../../assets/Arrow';

interface Props {
  title: string;
  description: string;
}

const Accordion = ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isopen'}>
        <Header onClick={toggleAccordion}>
          <Title isopen={isOpen.toString()}>{title}</Title>
          <Icon isopen={isOpen.toString()}>
            <Arrow size={24} />
          </Icon>
        </Header>
        <Description isopen={isOpen.toString()}>{description}</Description>
      </StyleSheetManager>
    </Container>
  );
};

export default Accordion;
