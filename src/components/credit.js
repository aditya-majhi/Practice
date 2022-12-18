import React, { useState, useEffect } from 'react'

const Credit = (props) => {
    const [CAmount, setCAmount] = useState([100, 200, 300]);
    const [inputAmount , setInputAmount] = useState(0) ;

    const handleDelete = (id) => {
        setCAmount((prevAmount) => {
            return [...prevAmount].filter((item, index) => {
                return index != id;
            })
        })
        props.func(CAmount) ;
    }

    const handleClick = () => {
        setCAmount((prevVal => {
            return [...prevVal , Number(inputAmount)] ;
        }))
        props.func(CAmount) ;
    }

    useEffect(() => {
        props.func(CAmount) ;
    } ,[CAmount])

    return (
        <div className='flex flex-col'>
            <div>
                Credit Amount
            </div>
            <div>
                {CAmount.map((cred, index) => {
                    return (
                        <div className='flex space-x-2'>
                            <h1>{cred}</h1>
                            <button className='' onClick={() => { handleDelete(index) }}><i className="fa-solid fa-minus"></i></button>
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

export default Credit
