import Card from '../../components/Card';
import Section from '../../components/Section';
import Title from '../../components/Title';
import { Content } from './styles';

import Slider from 'react-slick';

import Hours24 from '../../assets/Services/Hours24';
import Truck from '../../assets/Services/Truck';
import Car from '../../assets/Services/Car';
import Court from '../../assets/Services/Court';
import Satelite from '../../assets/Services/Satelite';

const servicesList = [
  {
    id: 1,
    icon: <Hours24 size={60} />,
    title: 'Assistência 24H',
    description: `Conte com o nosso suporte em qualquer momento do dia ou da noite. Nossa
    equipe de assistência 24 horas está pronta para ajudar em situações de
    emergência`,
  },
  {
    id: 2,
    icon: <Truck size={60} />,
    title: 'Serviço de reboque',
    description: `Em caso de imprevistos que impeçam o seu veículo de circular, nossa equipe providenciará um serviço de reboque confiável para levá-lo até a oficina ou local seguro mais próximo
    `,
  },
  {
    id: 3,
    icon: <Car size={60} />,
    title: 'Carro reserva',
    description: `Sabemos o quão importante é manter sua rotina diária, mesmo quando ocorrem imprevistos. Oferecemos o serviço de carro reserva, para que você não fique sem um veículo durante o período de reparo`,
  },
  {
    id: 3,
    icon: <Satelite size={60} />,
    title: 'Rastreador',
    description: `Nossa tecnologia de rastreamento com monitoramento em tempo real ajuda a proteger o seu veículo contra roubo e furto`,
  },
  {
    id: 3,
    icon: <Court size={60} />,
    title: 'Assistência Jurídica',
    description: `Em situações que envolvem questões legais, estamos ao seu lado`,
  },
];

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section id="servicos">
      <Content>
        <Title title="Serviços" />
        <div style={{ width: 'calc(100% - 10px)' }}>
          <Slider {...settings}>
            {servicesList.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </Slider>
        </div>
      </Content>
    </Section>
  );
};

export default Services;
