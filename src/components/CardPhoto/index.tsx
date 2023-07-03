import { StyleSheetManager } from 'styled-components';
import { Image } from './styles';

interface Props {
  image: string;
  text: string;
}

const CardPhoto = ({ image, text }: Props) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'img'}>
      <Image img={image}>{text}</Image>
    </StyleSheetManager>
  );
};

export default CardPhoto;
