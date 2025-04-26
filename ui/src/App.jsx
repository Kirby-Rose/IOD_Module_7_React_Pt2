import { Container } from "@mui/material";
import "./App.css";
import AppRoutes from "./AppRoutes";
import HeaderNavbar from "./components/HeaderNavbar";
import { UserProvider } from "./stores/userStore";
import { DataProvider } from "./stores/dataStore";

function App() {
  // VARIABLES/STATE

  // FUNCTIONS/SIDE EFFECT

  // RETURN OF OUR VISUAL STUFF
  return (
    <>
      <DataProvider>
        <UserProvider username={"Default User"}>
          <HeaderNavbar />

          <Container
            sx={{
              display: "flex",
              height: "90vh",
            }}
          >
            <AppRoutes />
          </Container>
        </UserProvider>
      </DataProvider>
    </>
  );
}

export default App;
