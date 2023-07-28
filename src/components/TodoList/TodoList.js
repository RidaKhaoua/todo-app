import React, { useState } from "react";
import "./TodoList.css";
import Header from "../Header/Header";

import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Todo from "../Todo/Todo";

import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
import { timing } from "../../Data/Timing";
function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState({ title: "", min: 0 });

  let numberTasks = todos.length;

  function handleTitleInput(e) {
    setInputValue({ ...inputValue, title: e.target.value });
  }

  function handleTimeInput(e) {
    setInputValue({ ...inputValue, min: e.target.value });
  }

  function handleAddTodo() {
    if (inputValue.title.length !== 0) {
      const newTodo = {
        id: uuidv4(),
        title: inputValue.title,
        min: inputValue.min,
        sec: 0,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    } else {
      alert("The Text Field ist empty!!");
    }
  }

  const displayTime = timing.map((min) => {
    return (
      <MenuItem key={min} value={min}>
        {min}min
      </MenuItem>
    );
  });

  return (
    <div className="Todo">
      <Header />
      <Container maxWidth="lg" sx={{ padding: "40px 0px" }}>
        {/* Info  */}
        <Stack
          direction="row"
          justifyContent="space-around"
          style={{
            marginBottom: "50px",
            backgroundColor: "#2D4356",
            borderRadius: "10px",
            color: "white",
          }}
        >
          {/* Numbre tache */}
          <div>
            <p>{numberTasks}</p>
            <p>Tasks</p>
          </div>
          {/* =======Numbre tache======= */}
          {/* Numbre Points */}
          <div>
            <p>0</p>
            <p>Points</p>
          </div>
          {/* =======Numbre Points  */}
          {/* Numbre Hours */}
          <div>
            <p>0</p>
            <p>Hours</p>
          </div>
          {/* ====== End Number Hours */}
        </Stack>
        {/* ========  End Info =====*/}

        {/* Add Todo */}
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: 4 }}
          justifyContent="center"
        >
          {/* Textfiel */}
          <Grid xs={8}>
            <TextField
              value={inputValue.title}
              id="outlined-basic"
              label="Add your todo"
              variant="outlined"
              size="small"
              style={{ width: "90%", marginRight: "20px" }}
              onChange={handleTitleInput}
            />
          </Grid>
          {/* ======= End TextField */}

          {/* Select */}
          <Grid>
            <FormControl sx={{ width: "120px" }} size="small">
              <InputLabel id="demo-simple-select-label">time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputValue.min}
                label="time"
                onChange={handleTimeInput}
              >
                {displayTime}
              </Select>
            </FormControl>
          </Grid>
          {/* ======= End Select */}

          {/* Button */}
          <Grid>
            <Button
              sx={{ width: "120px", backgroundColor: "#EAB2A0" }}
              variant="contained"
              onClick={handleAddTodo}
            >
              Add
            </Button>
          </Grid>
          {/* ====== End Button */}
        </Grid>
        {/* ======= End Add Todo */}

        {/* Schow Todos */}
        <Todo />
        {/* ============ End Show Todos */}
      </Container>
    </div>
  );
}

export default TodoList;
