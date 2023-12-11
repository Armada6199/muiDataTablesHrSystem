export default {
    typography: {
      fontFamily: [
        '"Segoe UI"',
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h6: {
        fontSize: 16,
      },
    },
    palette: {
      secondary: {
        main: "#FED93A",
      },
    },
    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            backgroundColor: "#f6f6f6",
          },
          paper: {
            boxShadow: "none",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            borderBottom: "none !important",
          },
          head: {
            background: "rgba( 255, 255, 255, 1 )",
            boxShadow: "0 2px 6px 0 rgba( 0, 7, 7, 0.09 )",
            backdropFilter: "blur( 6px )",
            color: "#3A6D6A",
            height: "40px",
            "&:last-child": {
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            },
            "&:first-child": {
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            },
          },
        },
      },
      MuiTableFooter: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            "& .MuiToolbar-root": {
              backgroundColor: "#fff",
              marginTop: 32,
            },
          },
        },
      },
    },
  }