import {cards, gamePage} from "../utils/constants";
import React, {useEffect} from 'react';

const StartGame = (props) => {

    useEffect(() => {
        props.shuffle(cards)
    }, [])

    return (
        <div className="col-lg-12 mt-5">
            <h2 className={'text-primary'}>Ready for WAR</h2>
            <form onSubmit={(e) => {
                                e.preventDefault()
                                props.changeActivePage(gamePage)}}>
                <input type="text"
                       required
                       className="form-control"
                       value={props.userName}
                       placeholder="Enter your name"
                       onChange={props.handleChange}/>
                <div className="col-lg-12">
                    <input type="submit"
                           value="Start"
                           className="btn btn-primary mt-2"/>
                </div>
            </form>
        </div>
    );
};

export default StartGame;