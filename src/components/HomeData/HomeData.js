import { Heading } from '@chakra-ui/layout';
import { Container } from './HomeData.styled';
export const HomeData = () => {
  return (
    <Container>
      <Heading
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'
      >
        Phonebook, <br /> welcome page{' '}
      </Heading>
          </Container>
  );
};