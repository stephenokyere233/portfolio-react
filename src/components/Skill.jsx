import React from 'react'

const Skill = ({name,icon}) => {
  return (
<div className='px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'>
            <p className='px-4'>{name}</p>
            {icon}
        </div>
  )
}

export default Skill