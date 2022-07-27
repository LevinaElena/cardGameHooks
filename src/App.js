import './App.css';
import {useState} from "react";
import {finishPage, gamePage, startPage} from "./utils/constants";
import React from "react";
import PlayGame from "./components/PlayGame";
import FinishGame from "./components/finishGame";
import StartGame from "./components/StartGame";

const App = () => {
    const [activePage, setActivePage] = useState(startPage)
    const [userName, setUserName] = useState('')
    const [userPoints, setUserPoints] = useState(0)
    const [compPoints, setCompPoints] = useState(0)
    const [step, setStep] = useState(0)

     const handleChange = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const changeActivePage = (page) => {
        if (userName.length < 3) return;
        setActivePage(page)
    }

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    const resetPoints = () => {
        setUserPoints(0)
        setCompPoints(0)
        setStep(0)
    }

    const myStyle = {
        width: "400px",
        margin: "100px auto"
    };

    let component;

    switch (activePage) {
        case gamePage:
            component =  <PlayGame
                userPoints={userPoints}
                compPoints={compPoints}
                step={step}
                userName={userName}
                setStep={setStep}
                setUserPoints={setUserPoints}
                setCompPoints={setCompPoints}
                changeActivePage={changeActivePage}
                />
            break;
        case finishPage:
            component =  <FinishGame
                userPoints={userPoints}
                compPoints={compPoints}
                userName={userName}
                changeActivePage={changeActivePage}
                resetPoints={resetPoints}
                shuffle={shuffle}/>
            break;
        default:
            component = <StartGame
                userName={userName}
                changeActivePage={changeActivePage}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                resetPoints={resetPoints}
                shuffle={shuffle}/>
    }

return (
    <div className={'container'} style={myStyle}>
        {component}
    </div>
);
};

export default App;