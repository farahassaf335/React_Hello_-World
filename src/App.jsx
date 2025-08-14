import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeaderProvider } from "./store/HeaderContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderProvider>
        <Home />
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default App;
