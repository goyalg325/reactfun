'use client'
import React, { useState, useEffect } from 'react'
const Chatcount = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    document.title = `Chats (${count})`
  }, [count])
  return (
    <>
      <div className='bg-black m-[2px] p-[2px] text-gray-500 flex flex-col items- p-auto my-auto w-full h-auto justify-between '>
        <div className='flex flex-col gap-y-2 my-auto'>
          <div className='mx-auto'>Count {count}</div>
          <button onClick={() => setcount(count + 1)} className='border-[2px] rounded-md border-gray-500 w-[100px] mx-auto'>Click me</button>
        </div>
      </div>
    </>
  )
}
export default Chatcount