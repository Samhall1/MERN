import React from 'react'

const AllEvents = (getEventHandler) => {

  console.log(getEventHandler)
 
  return (
    <>
      <button  onClick={getEventHandler} >Click to get get events</button>
    </>
  )
}

export default AllEvents