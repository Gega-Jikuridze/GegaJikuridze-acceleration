// Main App where rendering all of the routes, pages and components

import "./app.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Routes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        gcTime: 5000,
      },
    },
  });

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
