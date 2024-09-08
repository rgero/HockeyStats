import { Container, Typography } from "@mui/material"

import GameForm from "../../games/GameForm"

const AddGamePage = () => {
  return (
    <Container>
      <Typography variant="h1">Add Game</Typography>
      <GameForm/>
    </Container>
  )
}

export default AddGamePage
