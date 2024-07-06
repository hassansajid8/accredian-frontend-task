import React from 'react'
import "./alert.css"

const Alert = ({ message, type }: any) => {

  return (
    <div className={`absolute text-white px-8 p-4 text-center bottom-8 z-50 border-2 rounded-xl ${type == 'error'? 'bg-error' : type == 'success'? 'bg-success' : 'bg-blue-500'}`} id='alert'>
        <p><span>{type == "error"? 'Error' : type == "success"? 'Success' : ''}: </span>{message}</p>
    </div>
  )
}

export default Alert