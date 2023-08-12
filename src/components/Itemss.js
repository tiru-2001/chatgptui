import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
const Itemss = ({ item }) => {
  return (
    <>
      <Stack
        direction={"row"}
        margin={"15px 0px"}
        spacing={"10px"}
        paddingLeft={"10px"}
      >
        <Box>
          <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "16px" }} />
        </Box>
        <Box>
          {" "}
          <Typography paddingTop={"2px"} margin={"0px"} variant="body2">
            {item}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Itemss;
