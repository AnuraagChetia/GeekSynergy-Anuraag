import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const MovieLoading = () => {
  return (
    <Stack>
      <Skeleton h="45px" />
      <Skeleton h="45px" />
      <Skeleton h="45px" />
      <Skeleton h="45px" />
      <Skeleton h="45px" />
      <Skeleton h="45px" />
      <Skeleton h="45px" />
      <Skeleton h="45px" />
    </Stack>
  );
};

export default MovieLoading;
