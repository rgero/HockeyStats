import { Container, Typography } from "@mui/material"
import { Outlet, useMatch } from "react-router-dom"

const GamesOverviewPage = () => {

  const isGameOverview = useMatch('/games');

  if (isGameOverview)
  {
    return (
      <Container>
        <Typography variant="h1">Games Overview Page</Typography>
        <Outlet/>
      </Container>
    )
  } else {
    return (<Outlet/>)
  }


}

export default GamesOverviewPage
