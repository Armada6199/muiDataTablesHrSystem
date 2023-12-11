import { Box, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CandidatePopperBody() {
  return (
  <Box display={'flex'} color={'gray'} flexDirection={'column'} gap={4} p={2}>
    <Box display={'flex'} gap={2}>
      <AddCircleIcon/>
    <Typography>Add Tags</Typography>
    </Box>
    <Box display={'flex'} gap={2}>
      <EmailIcon/>
    <Typography>Email Candidate</Typography>
    </Box>
    <Box display={'flex'} gap={2}>
      <EditIcon/>
    <Typography>Edit Candidate</Typography>
    </Box>
    <Box display={'flex'} gap={2}>
      <DeleteIcon/>
    <Typography>Delete</Typography>
    </Box>
  </Box>
  )
}

export default CandidatePopperBody