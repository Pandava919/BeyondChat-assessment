import React from 'react'

const Textarea = ({ type, onchangeHandler, placeholder, id, labelData, inpName, val, isRequired }) => {
    return (
        <div>
            {labelData && <label className='text-black dark:text-white text-sm font-light pl-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ' htmlFor={id}>{labelData}</label>}
            <textarea
                type={type}
                placeholder={placeholder}
                id={id}
                name={inpName}
                value={val}
                className="mt-0.5 shadow appearance-none border-none rounded w-full py-2 px-3 dark:bg-slate-900 bg-gray-50 shadow-gray-400 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline "
                onChange={onchangeHandler}
                required={isRequired ? true : false}>
            </textarea>
        </div>
    )
}

export default Textarea
