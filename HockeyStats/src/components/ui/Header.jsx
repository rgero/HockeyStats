import { Container, Typography } from "@mui/material"

const Header = () => {
  return (
    <Container disableGutters
      maxWidth={false}
      sx={{
        backgroundClip: `url('Header.svg')`,
        backgroundRepeat: 'repeat-x',
        paddingBottom: 1
      }}
    >
      <Container>
        <Typography variant="h3">Hockey Stats</Typography>
      </Container>
    </Container>
  )
}

export default Header
