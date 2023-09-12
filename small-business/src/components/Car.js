import React from "react";
import list from "../list.json";
import { useParams } from "react-router-dom";

// import MUI components here //
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";

const Car = () => {
  const { id } = useParams();
  const list = list[id - 1];

  return (
    <Container fixed style={{width: "30vw"}}>
      <Paper elevation={3}>
        <h1> {list.Name}</h1>
        <Chip label={`Id: ${list.id}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Name: ${list.Name}`} style={{margin: "0.25vh"}}/>
      </Paper>
    </Container>
  );
};

export default Car;
