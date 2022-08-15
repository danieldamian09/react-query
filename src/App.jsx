import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Grilla from "./components/Grilla";
import "./App.css";

export default function App() {
  const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
        <h1>¡Rick & Morty!</h1>
        < ReactQueryDevtools / >
				<Grilla />
			</div>
		</QueryClientProvider>
	);
}
