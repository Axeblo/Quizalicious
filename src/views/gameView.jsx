import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './gameView.css';

function GameView(props) {
    function presentQuestion(question) {
        function option(text) {
            return <button onClick={()=>props.optionClick(text)} key={text} dangerouslySetInnerHTML={{__html: text}}></button>
        }
        if( !question.options )
        return <span>Wait!</span>;
        return <div key={question.question}>
            <div className="countDownTimer">
                <CountdownCircleTimer size={100}
                    isPlaying
                    duration={10}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={()=>props.timeout()}
                    >     
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <h1>{question.category} question {props.currentQuestion+1}/5</h1>
            <button className={"questionDifficulty game "+question.difficulty}>{question.difficulty}</button>
            <div className="questionText" dangerouslySetInnerHTML={{__html: question.question}}></div>
            <div className="butttonWrapper">
                {question.options.map(option)}
            </div>
        </div>;
    }

    function gameDone() {
        return <div>
                    <img src="Quizalicious logo.svg" className="image blob"/>
                    <h1>Game done!</h1>
                    <div className="gameResult">You got {props.rightAnswers} right.</div>
                    <button onClick={props.backClick}>Back</button>
                </div>
    }

    return  <div className={"gameView appear "+(props.exiting&&"implode")}>
                {props.showWrong&&<img className="wrong" src="./wrong.gif"/>}
                {props.showRight&&<div className="right"></div>}
                {props.showTimeout&&<div className="timeout">You're too slow!</div>}
                {props.gameDone?gameDone():presentQuestion(props.questions[props.currentQuestion])}
            </div>;
}

export default GameView;