import { Grid, Typography } from "@mui/material"

const DashboardHeader = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Typography variant="h2">Dashboard</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">Search</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">Add Game</Typography>
      </Grid>
    </Grid>
  )
}

export default DashboardHeader
