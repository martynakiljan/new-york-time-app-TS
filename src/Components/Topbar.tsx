import React, { useRef } from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import ArticleIcon from "@mui/icons-material/Article";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(5),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Topbar = ({ data, setData }) => {
  const inputRef = useRef(null);

  const filter = (term) => {
    const newArticles = [...data].filter(
      (x) =>
        x.description.toLowerCase().includes(term.toLowerCase()) ||
        x.title.toLowerCase().includes(term.toLowerCase())
    );
    setData(newArticles);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const handleChange = (event) => {
    const term = event.target.value;
    if (term.length > 0) {
      filter(term);
    } else {
      setData(data);
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <ArticleIcon onClick={refreshPage} />
        <Typography
          onClick={refreshPage}
          variant="h6"
          sx={{ m: 2 }}
          fontSize={{
            md: 25,
            xs: 15,
          }}
        >
          New York Times App
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            ref={inputRef}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Search..."
          ></StyledInputBase>
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
