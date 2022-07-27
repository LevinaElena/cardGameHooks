import React from 'react';
import {cards, finishPage} from "../utils/constants";

const PlayGame = (props) => {

    const next = () => {
        let currentStep = step
        let currCompValue = cards[currentStep].value
        let currUserValue = cards[currentStep + 18].value
        console.log(currentStep)
        if (currentStep < 17) {
            if (currCompValue > currUserValue) {
                props.setStep(currentStep + 1)
                props.setCompPoints(props.compPoints + 1)
            } else if (currCompValue < currUserValue) {
                props.setStep(currentStep + 1)
                props.setUserPoints(props.userPoints + 1)
            } else if (currCompValue === currUserValue) {
                props.setStep(currentStep + 1)
                props.setUserPoints(props.userPoints + 1)
                props.setCompPoints(props.compPoints + 1)
            }
        } else {
            props.changeActivePage(finishPage)
        }
    }

        const myStyle = {width: "1200px", margin: "100px auto"};
        let step = props.step
        return (
                    <div style={myStyle}>
                        <h2 className={'text-success'}>Computer: {props.compPoints}</h2>
                        <div>
                            {<img className={'col-1 p-1'} src={cards[step].src} alt={'cardOfComputer'}/>}
                        </div>
                        <div>
                            {<img className={'col-1 p-1'} src={cards[step + 18].src} alt={'cardOfUser'}/>}
                        </div>
                        <h2 className={'text-success'}>{props.userName}: {props.userPoints}</h2>
                        <button className="btn btn-primary" onClick={next}>Next</button>
                    </div>
        );

}

export default PlayGame;