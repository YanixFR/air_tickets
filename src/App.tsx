import './App.scss'
import Header from './components/global/Header/Header'
import Body from './components/global/Body/Body'
import {Provider} from "react-redux";
import {store} from "./store";

function App() {

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header/>
        <Body/>
      </div>
    </Provider>
  )
}

export default App
