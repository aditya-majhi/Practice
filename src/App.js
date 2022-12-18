import React, { useEffect, useState } from 'react'
import Credit from './components/credit'
import Debit from './components/debit'
import Dropdown from './components/dropdown'

const App = () => {

  const [creditVal , setCreditVal] = useState() ;
  const [debitVal , setDebitVal] = useState() ;
  const [total , setTotal] = useState(0) ;

  const CreditFunc = (CreditArr) => {
    let val = 0 ;
    CreditArr.forEach(num => {
      val = val + num ; 
    });
    setCreditVal(val) ;
  }
  
  const DebitFunc = (DebitArr) => {
    let val = 0 ;
    DebitArr.forEach(num => {
      val = val + num ;
    }) ;
    setDebitVal(val) ;
  }

  useEffect(() => {
    let val = debitVal - creditVal ;
    if(val <= 0){
      setTotal(0) ;
    }
    else{
      setTotal(val) ;
    }
  } ,[creditVal , debitVal]);

  return (
    <div>
      <div className='flex'>
        <Dropdown />
        <Debit func={DebitFunc} />
        <Credit func={CreditFunc} />
      </div>
      <div>
        <h1>Total = {total.toLocaleString("en-IN")}</h1>
      </div>
    </div>
  )
}

export default App

