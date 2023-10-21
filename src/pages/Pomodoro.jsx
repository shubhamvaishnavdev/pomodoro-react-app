import React, { useEffect, useState } from 'react'
import Modes from '../component/Modes'
import Timer from '../component/Timer'
import { UserButton } from '@clerk/clerk-react'
import Features from '../component/Features'

const Pomodoro = () => {

    const [selectedMode, setSelectedMode] = useState('focus') //shows which mode is selcted
    const [time, setTime] = useState(1500) // used for setting time based on mode
    const [isTimerRunning, setIsTimerRunning] = useState(false); //check timer is running or not
    const [selectedFeature, setSelectedFeature] = useState(''); //for knowing which feature is selcted like play, pause or reset

    const FOCUS_MODE = 25 * 60; //focus mode timing 25 minutes
    const BREAK_MODE = 5 * 60; //break mode timing 5 minutes


    useEffect(() => {
        //set time on timer based on selcted mode
        if (selectedMode === 'focus') {
            setTime(FOCUS_MODE)
        } else {
            setTime(BREAK_MODE)
        }
    }, [selectedMode])

    console.log("at pomodoro:   " + selectedMode);

    return (
        <div className='h-[100vh] w-full flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600'>
            <span className='absolute top-4 right-4'>
                {/* user profile icon for managing account and logout */}
                <UserButton />
            </span>

            <div className='h-auto w-full mx-4'>
                {/* mode shows which timer is running focus or break timer */}
                <Modes selectedMode={selectedMode} setSelectedMode={setSelectedMode} />


                {/* timer component */}
                <Timer setSelectedMode={setSelectedMode} time={time} setTime={setTime} isTimerRunning={isTimerRunning} />


                {/* component for features like play, pause and reset */}
                <Features  selectedMode={selectedMode}  setTime={setTime}  setIsTimerRunning={setIsTimerRunning} selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} />
            </div>
        </div>
    )
}

export default Pomodoro