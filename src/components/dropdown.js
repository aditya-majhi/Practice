import React, { useState } from 'react'

const Dropdown = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='flex flex-col'>
            <div className=''>
                Account Dropdown
                <i className="fa-solid fa-caret-down" onClick={() => {setShow(!show)}}></i>
            </div>
            { show &&
                <div className=''>
                    <div>
                        Update KYC
                    </div>
                    <div>
                        Update PAN Card
                    </div>
                    <div>
                        Update Aadhar Card
                    </div>
                </div>
            }
        </div>
    )
}

export default Dropdown
