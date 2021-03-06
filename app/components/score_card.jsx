import React from 'react';
import { Score } from './score.jsx';

export class ScoreCard extends React.Component{

        render(){

            if(this.props.visible){
                return(
                    <div className="welcome">
                        <p className="welcome-message">
                            Your Score Was {this.props.score} out of {this.props.maxScore}
                        </p>
                        <Score score = {this.props.score} maxScore = {this.props.maxScore} />

                        <button onClick = {this.props.reset}>Play Again!</button>
                    </div>
                );
            }

            return null;
        }
}