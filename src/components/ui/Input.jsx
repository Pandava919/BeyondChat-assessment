import React from 'react'

const Input = ({ type, onchangeHandler, placeholder, id, labelData, inpName, val, pattern, isRequired, inpMode, len, style }) => {
    return (
        <div >
            {labelData &&
                <label
                    className={`text-black w-full dark:text-white text-sm font-light pl-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-center`}
                    htmlFor={id}
                >
                    {labelData}
                </label>}
            <input type={type}
                placeholder={placeholder}
                id={id}
                pattern={pattern}
                name={inpName}
                value={val}
                inputMode={inpMode}
                maxLength={len}

                className={`mt-0.5 dark:bg-slate-900 bg-gray-50 shadow-gray-400 appearance-none rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${style ?? style} `}
                onChange={onchangeHandler}
                required={isRequired ? true : false}
            />
        </div>
    )
}

export default Input
