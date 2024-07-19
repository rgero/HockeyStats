import Button from "../ui/Button";
import Card from "../ui/Card";
import background from '../assets/background.jpg';
import styled from "styled-components";
import { useGoogleLogin } from "../authentication/hooks/useGoogleLogin";

const StyledLandingPage = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  const {login, isLoading} = useGoogleLogin();
  return (
    <StyledLandingPage>
      <Card>
        <Card.Header>Hockey Stats</Card.Header>
        <Card.Body>
          Welcome to the Hockey Stats. <br/>A website meant for you to easily track your stats.
        </Card.Body>
        <Card.Footer>
          <Button disabled={isLoading} onClick={null}>
            Log in with Google
          </Button>
        </Card.Footer>
      </Card>

    </StyledLandingPage>
  )
}

export default LandingPage
