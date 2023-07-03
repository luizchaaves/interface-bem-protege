import EmailIcon from '../../assets/Contact/EmailIcon';
import FacebookIcon from '../../assets/Contact/FacebookIcon';
import InstagramIcon from '../../assets/Contact/InstagramIcon';
import Whatsapp from '../../assets/Contact/Whatsapp';
import Logo from '../../components/Logo';
import Section from '../../components/Section';
import theme from '../../styles/theme';
import { Content, Icons, Left, Link, Right, Text } from './styles';

const socialMedias = [
  {
    id: 1,
    name: 'WhatsApp',
    icon: <Whatsapp size={32} color={theme.color.primary} />,
    link: 'https://mywhats.net/bemprotegejoinville',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: <FacebookIcon size={32} />,
    link: 'https://www.facebook.com/bemprotegesc/',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: <InstagramIcon size={32} />,
    link: 'https://www.instagram.com/bemprotege.sc/',
  },
  {
    id: 4,
    name: 'Email',
    icon: <EmailIcon size={32} />,
    link: 'mailto:cassio@bemprotege.com.br',
  },
];

const Contact = () => {
  return (
    <Section id="contato">
      <Content>
        <Left>
          <Logo />
          <Icons>
            {socialMedias.map((socialMedia) => (
              <Link
                href={socialMedia.link}
                target="_blank"
                rel="noreferrer"
                key={socialMedia.id}
              >
                {socialMedia.icon}
              </Link>
            ))}
          </Icons>
        </Left>
        <Right>
          <Text className="atendimento">
            Atendimento<strong>(47) 3700-4006</strong>
          </Text>
          <Text className="endereco">
            Rua Rio de Janeiro, n° 1279 - Lourdes Belo Horizonte/MG 30160-042
          </Text>
          <Text className="contato">contato@bemprotegevendas.com.br</Text>
        </Right>
      </Content>
    </Section>
  );
};

export default Contact;
