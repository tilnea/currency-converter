import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Content } from "./layouts/content";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000, // 10 min
      gcTime: 900000, // 15 min
    },
  },
});

const theme = {
  background: "#fdfff8",
  veryDark: "#373737",
  absoluteWhite: "#fff",
  primaryColor: "#6d9aac",
  winGreen: "#4bc600",
  loseRed: "#f23434",
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
