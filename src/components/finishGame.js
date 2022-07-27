import React, {useEffect} from 'react';
import {cards, gamePage} from "../utils/constants";



const FinishGame = (props) => {

        useEffect(() => {
            return () => {
                props.resetPoints()
                props.shuffle(cards)
            };
        }, []);

        let winner;
        const comp = props.compPoints
        const user = props.userPoints
        if (comp < user) {
            winner = <h2 className={'text-primary'}>{`${props.userName} won`}</h2>
        } else if (comp > user) {
            winner = <h2 className={'text-primary'}>{`${props.userName} lose`}</h2>
        } else if (comp === user) {
            winner = <h2 className={'text-primary'}>DRAW!</h2>
        }
        return (
            <div>
                {winner}
                <h2>{user + ' : ' + comp}</h2>
                <button className="btn btn-primary"
                        onClick={() => props.changeActivePage(gamePage)}>Again
                </button>
            </div>
        )
}

export default FinishGame;