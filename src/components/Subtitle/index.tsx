import { Text } from './styles';

interface Props {
  text: string;
}

const Subtitle = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

export default Subtitle;
