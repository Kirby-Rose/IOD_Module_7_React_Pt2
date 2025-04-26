import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useUserContext } from "../stores/userStore";

const PageThree = () => {
  // VARIABLES/STATE LIVE HERE
  const { currentUser } = useUserContext();
  const { id } = useParams();
  // FUNCTIONS/EFFECTS LIVE HERE

  const displayCurrentUser = () => {
    if (currentUser) {
      return `Hello, ${currentUser}, `;
    }
  };

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>{displayCurrentUser()}</Typography>
      <Typography>Page 3</Typography>
      <Typography>{id}</Typography>
    </Box>
  );
};

export default PageThree;
