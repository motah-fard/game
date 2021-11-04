import React, {Component} from 'react';
import './Hangman.css'
import RandomWord from './RandomWord'
import step0 from './images/0.jpg'
import step1 from './images/1.jpg'
import step2 from './images/2.jpg'
import step3 from './images/3.jpg'
import step4 from './images/4.jpg'
import step5 from './images/5.jpg'
import step6 from './images/6.jpg'
import Test from '../screens/Test'
class Hangman extends Component {
    static defaultProps = {
        maxGuess: 6,
        images: [<Test/>, step1, step2, step3,step4, step5, step6]
    }
    constructor(props){
        super(props);
        this.state = {
            mistake:0,
            //array that contain new correct or wrong letters
            guessed: new Set([]),
            //will think about this part later????
            answer: RandomWord,
        }
    }
    render(){
        return(
            <div className="Hangman container">

                <h3 className='text-center'>MOTY</h3> 
                <div className='float-right'>Wrong Guesses: {this.state.mistake} of {this.props.maxGuess}</div>
            </div>
        )
    }
}
export default Hangman;