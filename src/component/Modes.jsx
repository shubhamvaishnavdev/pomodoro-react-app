import React from 'react'

const Modes = ({ selectedMode, setSelectedMode }) => {
  return (
    <div className='flex justify-center items-center '>
      <div>
        <button
          onClick={() => setSelectedMode(prev=>'focus')}
          className={`text-white font-semibold text-lg py-2 px-4 border-2 border-white ${selectedMode === 'focus' ? 'bg-gradient-to-r from-slate-900 to-slate-700' : 'bg-transparent'}`}
        >
          Focuse
        </button>
        <button
          onClick={() => setSelectedMode(prev=>'break')}
          className={`text-white font-semibold text-lg py-2 px-4 border-2 border-l-0 border-white ${selectedMode === 'break' ? 'bg-gradient-to-r from-slate-900 to-slate-700' : 'bg-transparent'}`}
        >
          break
        </button>

      </div>
    </div>
  )
}

export default Modes