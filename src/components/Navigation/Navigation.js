import { useAuth } from 'hooks';
import { Nav, Text, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <Text>
          Welcome, {user.name} 
        </Text>
      )}
      <Nav>
        <StyledLink to="/">Home</StyledLink>

        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </Nav>
    </>
  );
};