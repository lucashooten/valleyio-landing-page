import React from "react";
import { ChakraProvider, Center, Image, Heading } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider resetCSS>
    <Center
      h="100vh"
      w="100vw"
      flexDirection="column"
      backgroundColor="gray.800"
      bgGradient="linear(to top right, gray.800,blue.800)"
    >
      <Image
        height="100px"
        width="100px"
        src="https://public.adobecc.com/files/1UI4RKTRPUGIFFZS01MOZE4SNHNFFF?content_disposition=attachment;filename=%22VALLEYIOWHITE.png%22&api_key=CCXWeb1"
        h="5vh"
        objectFit="cover"
        w="auto"
      />
      <Heading mt="20px" size="sm" letterSpacing="tight" color="whiteAlpha.500">
        (scottsdale) 695-3072 • lucas@val***io.com
      </Heading>
    </Center>
  </ChakraProvider>
);

export default App;
