import logo from './logo.svg';
import './App.css';
import { Provider } from "./components/ui/provider"
import Chatbot from "./components/chat/Chatbot";
import AutoResizingTextarea from "./components/chat/AutoResizingTextarea";

function App() {
    return (
        <Provider>
            {/* <AutoResizingTextarea /> */}
            <Chatbot />
        </Provider>
    );
}

export default App;
