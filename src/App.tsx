import React, { SetStateAction } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import "./App.css";
import List from "./List";
import AddStudent from "./AddStudent";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8080/students").then(({ data }) => {
      setStudents(data);
    });
  }, []);

  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
      })}
    >
      <Header showform={() => setShowModal(true)} />
      <List rows={students} />
      <AddStudent
        visible={showModal}
        cleanup={() => setShowModal(false)}
        updateList={(newVal: SetStateAction<never[]>) => setStudents(newVal)}
      />
    </Box>
  );
}

export default App;
