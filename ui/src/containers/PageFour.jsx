import { Typography, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const PageFour = () => {
  // VARIABLES/STATE LIVE HERE
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsOfSomething = searchParams.get("id");
  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>Page 4</Typography>
      <Typography>{searchParamsOfSomething}</Typography>
    </Box>
  );
};

export default PageFour;
