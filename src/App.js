import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/Header";
import {Route, Routes} from 'react-router-dom';
import ProjectList from "./components/ProjectList/ProjectList";
import Form from "./components/form/Form";


function App() {
    const {onToggleButton, tg} = useTelegram();
    useEffect(() => {
        tg.ready();
    })

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProjectList />}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
