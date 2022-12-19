import React, { useEffect, useState } from 'react'

const Debit = (props) => {

    const [DAmount, setDAmount] = useState([100,200,300]);
    const [inputAmount , setInputAmount] = useState(0) ;

    const handleDelete = (id) => {
        setDAmount((prevAmount) => {
            return [...prevAmount].filter((item , index) => {
                return index !== id ;
            })
        })
        props.func(DAmount) ;
    }

    const handleClick = () => {
        setDAmount((prevVal => {
            return [...prevVal , Number(inputAmount)] ;
        }))
        console.log(DAmount) ;
    }

    useEffect(() => {
        props.func(DAmount) ;
    } , [DAmount])

    return (
        <div className='flex flex-col'>
            <div>
                Debit Amount
            </div>
            <div>
                {DAmount.map((deb , index) => {
                    return (
                        <div className='flex space-x-2'>
                            <h1>{deb}</h1>
                            <button className='' onClick={() => {handleDelete(index)}}><i className="fa-solid fa-minus"></i></button>
                        </div>
                    );
                })}
            </div>
            <div className='flex'>
                <input type="number" className='w-8' value={inputAmount} onChange={(event) => {setInputAmount(event.target.value)}}/>
                <button onClick={handleClick}><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}

export default Debit
