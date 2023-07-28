import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
function Header() {
  return (
    <div
      className="Header"
      style={{ padding: "15px", boxShadow: "0 0 10px 10px #ddd" }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">TodoList</Typography>
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default Header;
