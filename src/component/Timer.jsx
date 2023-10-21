import React, { useEffect } from 'react'

const Timer = ({ setSelectedMode, time, setTime, isTimerRunning }) => {


    useEffect(() => {
        let timer;

        //logic for timer that decreses time by 1 second
        //if timer is running and time > 0 then the time countinously decrease tiil 0
        if (isTimerRunning && time > 0) {
            timer = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } 
        
        if (time === 0) {
            setSelectedMode(prev => prev === 'focus' ? 'break' : 'focus') //automatic change mode after completion of one mode
        }

        return () => clearInterval(timer);
    }, [isTimerRunning, time]);

    // Calculate minutes and seconds
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60)
    return (
        <div className='w-full h-[40vh] my-4'>
            <div className='h-full w-full md:max-w-3xl rounded-xl flex justify-center items-center mx-auto bg-gray-950'>
                {/* if minute and second is contain 1 digit then add 0 before it 8-> 08 */}
                <p className='text-white font-bold text-8xl'> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>

            </div>

        </div>
    );
}

export default Timer