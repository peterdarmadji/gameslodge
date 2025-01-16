import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error) ? 'Invalid Page' : 'Sorry, an unexpected error has occurred.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
