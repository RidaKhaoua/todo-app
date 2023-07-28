import React, { useEffect, useState } from "react";
import "./Todo.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";
function Todo() {
  const { todos, setTodos } = useContext(TodoContext);
  const [isPlay, setIsPlay] = useState(false);

  function handleStartTodo(id) {
    let interval = 0;
    let newMin = 0;
    let newSec = 0;
    let start = false;

    interval = setInterval(() => {
      const newTodos = todos.filter((todo) => {
        if (todo.id === id) {
          start = true;
          todo.start = start;

          if (todo.sec > 0) {
            todo.sec -= 1;
          } else if (todo.min > 0) {
            newMin = todo.min - 1;
            todo.min = newMin;
            newSec = 59;
            todo.sec = newSec;
          } else {
            start = false;
            todo.start = start;
            clearInterval(interval);
          }
          return todo;
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
    }, 1000);
  }

  function handlePlayButton(id) {
    let interval = 0;
    let newMin = 0;
    let newSec = 0;

    const updateStar = todos.filter((todo) => {
      if (todo.id === id) {
        todo.start = !todo.start;
        return todo;
      } else {
        return todo;
      }
    });

    interval = setInterval(() => {
      const newTodo = updateStar.filter((todo) => {
        if (todo.id === id) {
          let { min, sec, start, isCompleted } = todo;
          if (start) {
            if (sec > 0) {
              newSec = sec - 1;
              todo.sec = newSec;
              setTodos({ ...todo, sec });
            } else if (min > 0) {
              newMin = min - 1;
              todo.min = newMin;
              newSec = 59;
              todo.sec = newSec;
            } else {
              clearInterval(interval);
              todo.isCompleted = !todo.isCompleted;
              todo.start = !todo.start;
            }
          } else {
            clearInterval(interval);
          }
          return todo;
        } else {
          return todo;
        }
      });

      setTodos(newTodo);
    }, 1000);
  }

  const showTodos = todos.map((todo) => {
    const { id, title, min, sec, start, isCompleted } = todo;
    return (
      <Card
        key={id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
          backgroundColor: "#EAB2A0",
          padding: "0 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              className={isCompleted ? "completed" : ""}
              component="div"
              variant="h5"
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Timing: {min}:{sec < 10 ? `0${sec}` : sec === 0 ? "00" : sec}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Delete Button */}
          <IconButton className="icon-button">
            <DeleteIcon className="delete" />
          </IconButton>
          {/* ======= Delete Button */}
          {/* Edit Button */}
          <IconButton className="icon-button">
            <EditIcon className="edit" />
          </IconButton>
          {/* ======= End Edit Button */}

          {/* Start Button */}
          <IconButton
            className="icon-button"
            onClick={() => {
              handlePlayButton(id);
            }}
          >
            {start ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          {/* ======== End Add Button */}
        </Box>
      </Card>
    );
  });
  return <>{showTodos}</>;
}

export default Todo;
