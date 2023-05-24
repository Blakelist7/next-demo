import React from 'react'

export default function SecondaryCard(props) {
  return (
    <div className='w-[100%] shadow-xl rounded-md'>
        <div>
            <img className='h-[300px] w-[100%] object-contain rounded-md' src={props.img} alt="dp"/>
            <div className='flex flex-col gap-4 p-[20px]'>
                <div>
                    <h2 className='font-bold'>{props.title}</h2>
                </div>
                <div>
                    <p>{props.text}</p>
                </div>
                <div>
                    <a className='text- [#4200d0]' href={props.link}>Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}
