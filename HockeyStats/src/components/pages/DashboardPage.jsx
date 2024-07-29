import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledDashboard = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRow = styled(Row)`
  margin-top: 3rem;
`

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
      <StyledDashboard>
        <Heading as="h1">Dashboard</Heading>
        <Row>
          The page you are looking for has not been found.
        </Row>
        <StyledRow>
          <Button onClick={()=> navigate("/")}>Click here to return</Button>
        </StyledRow>
      </StyledDashboard>
  )
}

export default DashboardPage
