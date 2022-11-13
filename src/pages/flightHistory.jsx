import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import StatusBoxSmall from "../components/StatusBoxSmall/StatusBoxSmall";
import Footer from "../components/Footer/Footer";
import "./flightHistory.css";

function History() {
    return (
        <ChakraProvider theme={theme}>
            <Box className="history" textAlign="center" fontSize="xl">
                <Grid gap={0}>
                    <div className="history-header">
                        <h1 className="history-header-content">Olá, Magrão!</h1>
                    </div>
                    <div className="history-content">
                        <StatusBoxSmall
                            type="air"
                            status="Last-Call portao 244"
                            progress={50}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="air"
                            status="Last-Call portao 244"
                            progress={50}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="air"
                            status="Last-Call portao 244"
                            progress={50}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="air"
                            status="Last-Call portao 244"
                            progress={50}
                        ></StatusBoxSmall>
                            <Footer></Footer>
                    </div>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default History;
