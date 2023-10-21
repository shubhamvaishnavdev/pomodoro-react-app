import React from 'react'
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'
const Features = ({
    selectedMode,
    setTime,
    setIsTimerRunning,
    selectedFeature,
    setSelectedFeature }) => {
    const playTimer = () => {
        setIsTimerRunning(true);
        setSelectedFeature('play');
    };

    const pauseTimer = () => {
        setIsTimerRunning(false);
        setSelectedFeature('pause');
    };

    const resetTimer = () => {
        setIsTimerRunning(false);
        setTime(() => {
            if (selectedMode === 'focus') {
                return 25 * 60;
            } else {
                return 5 * 60;
            }
        });
        setSelectedFeature('reset');
    };



    return (
        <div className='h-auto w-full mt-4 flex justify-center items-center gap-2'>


            <BsFillPlayCircleFill
                onClick={playTimer}
                className={` text-5xl ${selectedFeature === 'play' ? 'text-slate-900' : 'text-black'}`}
            />

            <BsFillPauseCircleFill
                onClick={pauseTimer}
                className={` text-5xl ${selectedFeature === 'pause' ? 'text-slate-900' : 'text-black'}`}
            />


            <GrPowerReset
                onClick={resetTimer}
                className={` text-5xl ${selectedFeature === 'reset' ? 'text-slate-900' : 'text-black'}`}
            />

        </div>
    )
}

export default Features