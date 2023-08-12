import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box, Typography, FormControl, Link, Stack } from "@mui/material";
import Button from "react-bootstrap/Button";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import SendIcon from "@mui/icons-material/Send";
import BoltIcon from "@mui/icons-material/Bolt";
import LockIcon from "@mui/icons-material/Lock";
import Itemss from "./components/Itemss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

const Mainpage = () => {
  return (
    <>
      <Container fluid>
        <Row
          style={{
            minHeight: "100vh",
          }}
        >
          <Col style={{ background: "#202123" }} md="2">
            <Row>
              <Col className="py-2">
                <Stack spacing={"15px"} direction="row">
                  <Box
                    component={"span"}
                    sx={{
                      border: ".5px solid grey",
                      padding: "10px 90px 10px 5px",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography component={"span"}>+</Typography>
                    <Typography
                      variant="body2"
                      component={"span"}
                      padding="0px 0px 0px 10px "
                    >
                      {" "}
                      New chat
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "0.5px solid grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "9px 10px ",
                      borderRadius: "5px",
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        height: "13px",
                        width: "13px",
                        border: "2px solid white",
                        borderRadius: "2px",
                      }}
                    >
                      <Box
                        sx={{
                          marginLeft: "2px",
                          height: "100%",
                          width: "2px",
                          background: "white",
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <Typography
                  variant="caption"
                  fontWeight={"bold"}
                  component={"span"}
                  color={"#8E8EA0"}
                  paddingLeft={"10px"}
                >
                  Previous 7 Days
                </Typography>
                <Itemss item={"Html vs Xhtml"} />

                <Typography
                  variant="caption"
                  fontWeight={"bold"}
                  component={"span"}
                  color={"#8E8EA0"}
                  paddingLeft={"10px"}
                >
                  Previous 7 Days
                </Typography>
                <Itemss item={"Html vs Xhtml"} />
                <Itemss item={"Javascript"} />
                <Itemss item={"What is MVC"} />
                <Itemss item={"What is Xml"} />
                <Itemss item={"What is pure function"} />
                <Itemss item={"What is memoization"} />
                <Itemss item={"React"} />
                <Itemss item={"Angular"} />
                <Itemss item={"What is generators"} />
                <Itemss item={"What is iterators"} />
                <Itemss item={"Binary Search"} />
              </Col>
            </Row>
            <Row className="px-1">
              <Col style={{ borderTop: "1px solid grey" }}>
                <Stack
                  padding={"20px 0px 20px 10px"}
                  direction={"row"}
                  spacing={"50px"}
                >
                  <Box>
                    <Typography variant="body2">
                      {" "}
                      <PersonOutlineOutlinedIcon
                        style={{
                          fontSize: "20px",
                        }}
                      />{" "}
                      Upgrade to Plus
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: "#FAE69E",
                      borderRadius: "6px",
                      fontSize: "13px",
                      color: "black",
                      padding: "2px 5px",
                    }}
                  >
                    New
                  </Box>
                </Stack>
              </Col>
            </Row>
          </Col>
          <Col style={{ background: "#343541" }} md="10">
            <Row>
              <Col
                textCenter
                style={{
                  padding: "24px 8px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    padding: "4px",
                    borderRadius: "10px",
                    background: "#202123",

                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    style={{
                      padding: " 8px 39px",
                      textAlign: "center",
                      background: "#40414f",

                      color: "white",
                    }}
                    variant="outlined"
                  >
                    <BoltIcon style={{ fill: "#0e985a" }} />
                    <Typography variant="small" padding="0px 0px 0px 4px">
                      GPT-3.5
                      <svg
                        stroke="#202123"
                        fill="#8E8EA0"
                        stroke-width="2"
                        viewBox="0 0 512 512"
                        class="h-4 w-4 ms-1 mb-1 toggle-item-button-open ml-0.5 text-gray-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                      </svg>
                    </Typography>
                  </Button>
                  <Button
                    style={{
                      padding: " 8px 39px",
                      textAlign: "center",
                      color: "#8E8EA0",
                    }}
                    variant="text"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="h-4 w-4 transition-colors group-hover/button:text-brand-purple"
                      width="16"
                      height="16"
                      stroke-width="2"
                    >
                      <path
                        d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
                        fill="#8E8EA0"
                      ></path>
                    </svg>

                    <Typography
                      variant="small"
                      color={"inherit"}
                      padding="0px 0px 0px 4px"
                    >
                      Gpt-4
                      <LockIcon
                        fontSize="10px"
                        style={{ margin: "0px 0px 3px 5px ", fill: "#8E8EA0" }}
                      />
                    </Typography>
                  </Button>
                </Box>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="7">
                <Row>
                  <Col className="text-center my-5">
                    <Typography variant="h4" fontWeight={"bold"}>
                      ChatGPT
                    </Typography>
                  </Col>
                </Row>
                <Row className="justify-content-evenly my-2">
                  <Col md="4">
                    <Box textAlign={"center"}>
                      <LightModeOutlinedIcon></LightModeOutlinedIcon>
                      <Typography
                        fontWeight={"500"}
                        fontSize={"18px"}
                        py={"5px"}
                      >
                        Examples
                      </Typography>
                    </Box>
                    <Box
                      my={1}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        "Explain quantum computing in simple terms" →
                      </Typography>
                    </Box>
                    <Box
                      my={2}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        "Got any creative ideas for a 10 year old’s birthday?" →
                      </Typography>
                    </Box>
                    <Box
                      my={2}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        "How do I make an HTTP request in Javascript?" →
                      </Typography>
                    </Box>
                  </Col>
                  <Col md="4">
                    <Box textAlign={"center"}>
                      <ElectricBoltOutlinedIcon />
                      <Typography
                        fontWeight={"500"}
                        fontSize={"18px"}
                        py={"5px"}
                      >
                        Capabilites
                      </Typography>
                    </Box>
                    <Box
                      my={1}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        Remembers what user said earlier in the conversation
                      </Typography>
                    </Box>
                    <Box
                      my={2}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        Allows user to provide follow-up corrections
                      </Typography>
                    </Box>
                    <Box
                      my={2}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        Trained to decline inappropriate requests
                      </Typography>
                    </Box>
                  </Col>
                  <Col md="4">
                    <Box textAlign={"center"}>
                      <ReportProblemOutlinedIcon />
                      <Typography
                        fontWeight={"500"}
                        fontSize={"18px"}
                        py={"5px"}
                      >
                        Limitations
                      </Typography>
                    </Box>
                    <Box
                      my={1}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        May occasionally generate incorrect information
                      </Typography>
                    </Box>
                    <Box
                      my={2}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        May occasionally produce harmful instructions or biased
                        content
                      </Typography>
                    </Box>
                    <Box
                      my={2}
                      py={1}
                      px={1}
                      borderRadius={"5px"}
                      bgcolor={"#FFFFFF0D"}
                    >
                      <Typography fontSize={"14px"} textAlign={"center"}>
                        Limited knowledge of world and events after 2021
                      </Typography>
                    </Box>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="text-center py-3" md="8" py="3">
                <FormControl
                  fullWidth
                  sx={{
                    my: 1,
                    boxShadow: "0px 0px 10px 0px #202123",
                    background: "#FFFFFF0D",
                    borderRadius: "15px",
                    outline: "none",
                    border: "none",
                  }}
                >
                  <OutlinedInput
                    placeholder="Send a message"
                    sx={{
                      outline: "none",
                      border: "none",
                      color: "white",
                      borderRadius: "15px",
                    }}
                    id="outlined-adornment-amount"
                    endAdornment={<SendIcon />}
                  />
                </FormControl>
                <Typography variant="caption">
                  Free Research Preview. ChatGPT may produce inaccurate
                  information about people, places, or facts.
                  <Link href="#" color={"inherit"}>
                    ChatGPT August 3 Version
                  </Link>
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mainpage;
