import React from 'react'

const Button = ({ type, enterData, onClickHandler, style }) => {
    return (
        <div>
            <button
                type={type}
                onClick={onClickHandler}
                className={`cursor-pointer ${style ? style : 'bg-blue-600 hover:bg-blue-700'} text-md text-white font-semibold py-2 px-3 mt-1.5 rounded-md`}
            >
                {enterData}
            </button>
        </div>
    )
}

export default Button
