import { Container, Typography } from "@mui/material"

import { useParams } from "react-router-dom"

const GameDetails = () => {
  const {id} = useParams();
  return (
    <Container>
      <Typography variant="h1">Details about game: {id}</Typography>
    </Container>
  )
}

export default GameDetails
