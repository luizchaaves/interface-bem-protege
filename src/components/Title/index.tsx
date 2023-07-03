import { Text } from './styles';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <Text>{title}</Text>;
};

export default Title;
