import { Container, Divider } from "@mui/material";

import DashboardHeader from "../dashboard/DashboardHeader";
import Row from "../ui/Row";

const DashboardPage = () => {
  return (
      <Container>
        <DashboardHeader/>
        <Divider/>
        <Row>
          This is the example dashboard. Likely will contain stats, recent games, etc.
        </Row>
      </Container>
  )
}

export default DashboardPage
