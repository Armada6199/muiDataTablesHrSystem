import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function NameAndOwner({value}) {
  return (
    <Grid container direction={"row"}  alignItems={"center"}>
    <Grid item md={4}>
      <Box
        component={"img"}
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width={48}
        height={48}
        borderRadius={"50%"}
      />
    </Grid>
    <Grid item md={8}>
      <Typography variant="h6" >{value}</Typography>
    </Grid>
  </Grid>
  )
}

export default NameAndOwner