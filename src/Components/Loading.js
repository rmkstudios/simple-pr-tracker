import { Skeleton, Stack } from "@chakra-ui/react";

function Loading() {
  return (
    <Stack>
      <Skeleton height="40px" />
      <Skeleton height="25px" />
      <Skeleton height="25px" />
    </Stack>
  );
}

export default Loading;
