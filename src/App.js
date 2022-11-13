import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import StatusBoxLarge from './components/StatusBoxLarge/StatusBoxLarge';
import StatusBoxSmall from './components/StatusBoxSmall/StatusBoxSmall';
import './app.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="app" textAlign="center" fontSize="xl">
        <Grid gap={0}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <h1 className="app-header">Olá, Magrão!</h1>
          <div className="app-content">
            <StatusBoxLarge
              type="air"
              status="Last-Call portao 244"
            ></StatusBoxLarge>
            <StatusBoxSmall type="bag" status="bagagem no aviao"></StatusBoxSmall>
            <StatusBoxSmall type="air" status="embarque portao 244"></StatusBoxSmall>
            <StatusBoxSmall type="air" status="aviao taxiando"></StatusBoxSmall>
            <StatusBoxSmall type="air" status="embarque em 40 min"></StatusBoxSmall>
            <StatusBoxSmall type="bag" status="bagagem em pesagem"></StatusBoxSmall>
            <StatusBoxSmall type="bag" status="bagagem em separacao"></StatusBoxSmall>
            <StatusBoxSmall type="air" status="check-in concluido"></StatusBoxSmall>
          </div>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
