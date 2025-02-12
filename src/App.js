import logo from './logo.svg';
import './App.css';
import { Provider } from "./components/ui/provider"
import Chatbot from "./components/chat/Chatbot";

function App() {
    return (
        <Provider>
            {/* <AutoResizingTextarea /> */}
            <Chatbot />
        </Provider>
    );
}

export default App;
