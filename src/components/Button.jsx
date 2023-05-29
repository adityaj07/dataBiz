import React from 'react'

const Button = ({text="Get Started", className}) => {
  return (
    <button className={`bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 ${className} py-3 text-black hover:transition-colors hover:bg-[#00bb74]`}>{text}</button>
  )
}

export default Button