import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
    return (
        <>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </>
    );
}

export default App;
