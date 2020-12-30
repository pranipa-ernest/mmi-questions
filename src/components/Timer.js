import React, {useState, useEffect, useRef} from 'react'
import {Fade, Box, Grid, Button, makeStyles} from '@material-ui/core'
// import CompoundTimer from 'react-compound-timer'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    timer: {
        color: "#C11A6A",
        fontWeight: "bold",
        fontSize: 18
    }
    },
  }));
  

export default function Timer() {
    const classes = useStyles()

    const [totalTime, setTotalTime] = useState(600)
    const [time, setTime] = useState(120)
    const [displayTimer, setDisplayTimer] = useState(false)
    const [isActive, setIsActive] = useState(false)
  
    function toggle() {
        setIsActive(!isActive)
        if (!displayTimer) {
          setDisplayTimer(true)
        } 
      }  

    function reset() {
        setTotalTime(600)
        setTime(120)
        setIsActive(false)
    }

    function displayMinutes() {
        return Math.floor(time / 60);
    }

    function displaySeconds() {
        let sec = time % 60
        if (sec < 10) {
            sec = "0" + sec
        }
        return sec
    }

    let display = () => {
        if (totalTime > 480) {
            return <div style={{color: '#7B7B7B', fontWeight: "bold", fontSize: 22}}>
            <p> Thinking Time <br/> {displayMinutes()}:{displaySeconds()}</p>
            </div>
        } else {
            return <div style={{color: '#4E4E4E', fontWeight: "bold", fontSize: 22}}>
            <p> Discussion Time <br/> {displayMinutes()}:{displaySeconds()}</p>
            </div>
        }
    }

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                if (totalTime <= 0) {
                    setTotalTime(0)
                    setTime(0)
                    setIsActive(false)
                } else if (time <= 0) {
                    setTotalTime(prev => prev - 1)
                    setTime(480)
                } else {
                    setTotalTime(prev => prev - 1)
                    setTime(prev => prev - 1)
                }   
            }, 1000);
        } else if (!isActive && time !== 0) {
                clearInterval(interval);
            };
        return () => clearInterval(interval)
        }, [isActive, time, totalTime]);
    

    return (
        <div>
            <Grid
            container
            direction="column"
            alignItems="center"
            justify="center">
            <Grid item xs={12}>
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={toggle}>
                    {isActive ? "Pause Timer" : "Start Timer"}
                </Button>
                <Button variant="contained" color="secondary" onClick={reset}>
                    Reset
                </Button>
            </div>
            </Grid>
            <Fade in={displayTimer} timeout={1000}>
            <Box style={{textAlign: "center"}}>
                {display()}
            </Box>
            </Fade>
            </Grid>
        </div>
    );
}