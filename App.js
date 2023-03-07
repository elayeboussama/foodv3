import { createTheme, ThemeProvider } from "@rneui/themed";
import { Text } from "react-native";
import Header from "./src/Components/Header";
import { theme } from "./src/styles";
import Body from "./src/views/Body";


const AppWrapper = () => {
  
  return (
    <ThemeProvider  >
      <App/>
    </ThemeProvider>
  );
};

const App = () => {
  return (
      <Body/>
    )
}



export default AppWrapper;
