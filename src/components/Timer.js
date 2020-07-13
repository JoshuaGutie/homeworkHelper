import React, { Component } from 'react'
import "./Game.css";
import PlayNav from "./PlayNav";


export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 5,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
<link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet" / >
                { minutes === 0 && seconds === 0
                    ? <PlayNav />
                    : <h1 className ="ready">Get Ready!<br/>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}