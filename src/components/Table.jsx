import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Grid,
  Popper,
  Rating,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ThemeProvider } from "@emotion/react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NameAndOwner from "./NameAndOwner";
import CandidatePopperBody from "./CandidatePopperBody";
import Stages from "./Stages";
import CustomFooter from "./CustomerFooter";
import "./Styles.css";
import data from '../constants/data'
import themeObj from '../constants/theme'
const stages = [
  "New Applied",
  "Screening",
  "Design Challange",
  "Interview",
  "Test",
];
const getMuiTheme = () =>
  responsiveFontSizes(
    createTheme(themeObj)
  );
const glassmorphismStyle = {
  background: "rgba( 255, 255, 255, 1 )",
  boxShadow: "0 2px 6px 0 rgba( 0, 7, 7, 0.09 )",
  backdropFilter: "blur( 6px )",
  borderRadius: "10px ",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};
function Table() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const columns = [
    {
      name: "candidateName",
      label: "Candidate Name",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box width={'250px'} maxWidth={'250px'} >
          <NameAndOwner value={value} />
          </Box>
        ),
      },
    },
    {
      name: "rating",
      label: "Rating",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box display={"flex"} width={'250px'} maxWidth={'250px'}  gap={2}>
            <Box item md={8}>
              <Rating name="rating" value={value} />
            </Box>
            <Box item md={3}>
              <Typography component="legend" fontWeight={"bold"}>
                {value}.0
              </Typography>
            </Box>
          </Box>
        ),
      },
    },
    {
      name: "stages",
      label: "Stages",
      options: {
        filter: true,
        sortCompare: (order) => {
          return (obj1, obj2) => {
            let val1 = stages.indexOf(obj1.data);
            let val2 = stages.indexOf(obj2.data);
            console.log(val1, val2);
            return (val1 - val2) * (order === "asc" ? 1 : -1);
          };
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <Box width={'250px'} maxWidth={'250px'} >
            <Stages value={value} />
            </Box>;
        },
      },
    },
    {
      name: "appliedDate",
      label: "Applied Date",
      options: {
        filter: true,
        sortCompare: (order) => {
          return (obj1, obj2) => {
            console.log(Date.parse(obj1.data), obj1.data);
            let val1 = Date.parse(obj1.data);
            let val2 = Date.parse(obj2.data);
            return (val1 - val2 < 0 ? -1 : 1) * (order === "asc" ? 1 : -1);
          };
        },
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box width={'250px'} maxWidth={'250px'}  >
        <Typography variant="subtitle1">
            {value.split("/").join(" / ")}
          </Typography>
          </Box>
       
        ),
      },
    },
    {
      name: "owner",
      label: "Owner",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return value ? (
            <Grid container width={'250px'} maxWidth={'250px'}  alignItems={"center"}>
              <Grid item md={10}>
                <NameAndOwner value={value} />
              </Grid>
              <Grid item md={2}>
                <MoreHorizIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleOpenPopper}
                />
              </Grid>
            </Grid>
          ) : (
            <Box
              display={"flex"}
              alignItems={"center"}
              color={"#5C8784"}
              gap={2}
              maxWidth={'200px'}
            >
              <AddCircleIcon />
              <Typography variant="subtitle1" fontWeight={"bold"}>
                Add Owner
              </Typography>
            </Box>
          );
        },
      },
    },
  ];
  const options = {
    filterType: "dropdown",
    print: false,
    download: false,
    filter: false,
    elevation: 0,
    pagination: true,
    rowsPerPage: 10,
    border: "none",
    customFooter: (
      count,
      page,
      rowsPerPage,
      changeRowsPerPage,
      changePage,
      textLabels
    ) => {
      return (
        <CustomFooter
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          changeRowsPerPage={changeRowsPerPage}
          changePage={changePage}
          textLabels={textLabels}
        />
      );
    },
  };
  
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <Box
        width={"100%"}
        height={"100%"}
        bgcolor={"#F6F6F6"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"90%"}>
          <MUIDataTable
            title={`Total Candidates :${data.length}`}
            data={data}
            columns={columns}
            options={options}
          />
          <Box />
          <Popper
            sx={glassmorphismStyle}
            open={open}
            anchorEl={anchorEl}
            placement={"bottom-start"}
          >
            <CandidatePopperBody />
          </Popper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Table;
