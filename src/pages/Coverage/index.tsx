import React from 'react';
import Section from '../../components/Section';
import { Content, List } from './styles';
import Title from '../../components/Title';
import CardPhoto from '../../components/CardPhoto';

import CoverageColisao from '../../assets/Coverage/colisao.webp';
import CoverageDanos from '../../assets/Coverage/danos.webp';
import CoverageFenomenos from '../../assets/Coverage/fenomenos.webp';
import CoverageIncendio from '../../assets/Coverage/incendio.webp';
import CoverageRoubo from '../../assets/Coverage/roubo.webp';
import CoverageVidro from '../../assets/Coverage/vidro.webp';

const coverageList = [
  {
    id: 1,
    image: CoverageColisao,
    text: 'colisão',
  },
  {
    id: 2,
    image: CoverageDanos,
    text: 'danos à terceiros',
  },
  {
    id: 3,
    image: CoverageRoubo,
    text: 'roubo e furto',
  },
  {
    id: 4,
    image: CoverageIncendio,
    text: 'incêndio',
  },
  {
    id: 5,
    image: CoverageFenomenos,
    text: 'fenômenos naturais',
  },

  {
    id: 6,
    image: CoverageVidro,
    text: 'vidros e faróis',
  },
];

const Coverage = () => {
  return (
    <Section id="coberturas">
      <Content>
        <Title title="Coberturas" />
        <List>
          {coverageList.map((coverage) => (
            <CardPhoto
              key={coverage.id}
              image={coverage.image}
              text={coverage.text}
            />
          ))}
        </List>
      </Content>
    </Section>
  );
};

export default Coverage;
