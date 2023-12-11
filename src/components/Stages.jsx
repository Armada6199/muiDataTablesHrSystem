import { Grid, Typography } from '@mui/material';
import React from 'react'
const stages = [
    "New Applied",
    "Screening",
    "Design Challange",
    "Interview",
    "Test",
  ];
function Stages({value}) {
    const stageNum = stages.indexOf(value);

    const color =
    value == stages[0]
      ? "#9DC082"
      : value == stages[1]
      ? "#356966"
      : value === stages[2]
      ? "#FF8300"
      : value === stages[3]
      ? "#C16EC8"
      : value === stages[4]
      ? "#50CDC6"
      : "";
  return (
    <Grid container direction={"column"} gap={1}>
    <Grid item>
      <Typography variant="subtitle1">{value}</Typography>
    </Grid>
    <Grid container item gap={2}>
      {stages.map((stage, index) => (
        <Grid
          item
          key={index}
          height={17}
          bgcolor={stageNum >= index ? color : "lightgray"}
          sm={1}
          md={1}
          minWidth={'25px'}
        >
          <Typography
            textAlign={"center"}
            fontWeight={"bold"}
            color={"white"}
            variant="caption"
            component={"p"}
          >
            {stageNum >= index ? index + 1 : ""}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Grid>
  )
}

export default Stages