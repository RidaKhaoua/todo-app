import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";

import { useState } from "react";
import { TodoContext } from "./context/TodoContext";
import { todosList } from "./Data/Todos";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
  palette: {
    primary: {
      main: "#2D4356",
    },
    secondary: {
      main: "#EAB2A0",
    },
  },
});

function App() {
  const [todos, setTodos] = useState(todosList);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TodoContext.Provider value={{ todos, setTodos }}>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </TodoContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
