import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import StatusBoxLarge from "../components/StatusBoxLarge/StatusBoxLarge";
import Footer from "../components/Footer/Footer";
import "./app.css";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box className="app" textAlign="center" fontSize="xl">
                <Grid gap={0}>
                    <div className="app-header">
                        <h1 className="app-header-content">Olá, Magrão!</h1>
                    </div>
                    <div className="app-content">
                        <div className="app-box-air">
                            <StatusBoxLarge
                                type="air"
                                status="Last-Call portao 244"
                                progress={100}
                            ></StatusBoxLarge>
                        </div>
                        <div className="app-box-bag">
                            <StatusBoxLarge
                                type="bag"
                                status="bagagem a bordo"
                                progress={50}
                            ></StatusBoxLarge>
                            <Footer></Footer>
                        </div>
                    </div>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
