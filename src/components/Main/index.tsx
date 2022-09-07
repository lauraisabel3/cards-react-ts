import React, { useState } from 'react';
import './styles.css'

const Main = () => {
  const[name,setName] = useState('')
  const[number, setNumber] = useState('')
  const[month,setMonth] = useState('')
  const[year, setYear] = useState('')
  const[submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    setSubmit(false)
    setName('')
    setNumber('')
    setMonth('')
    setYear('')
  }

  // const validateForm = () => {
  //   let field;
  //   let error;
  //   let validForm;
  // }
  return(
  <div className='main__container'>
    <div className='card__container'>
      <span className='card__logo'/>
      <span className='card__number'>{number}</span>
      <span className='card__name'>{name}</span>
      <span className='card__date'>{month}{year}</span>
    </div>
    {!submit && 
    <form className='card__form' onSubmit={() => setSubmit(true)}>
    <label htmlFor='name' className='form__label-large'>
      CARDHOLDER NAME
      <input name='name' placeholder='e.g. Jane Applessed' onChange={e => setName(e.target.value.toUpperCase())} required={true}/>
      </label>
      <label htmlFor='card-number' className='form__label-large'>
      CARD NUMBER
      <input name='card-number' placeholder='e.g. 1234 5678 9123 0000'  onChange={e => setNumber(e.target.value)} required={true}/>
      </label>
    <div className='form__date-container'>
      <label className='form__label-date' htmlFor='date'>
      EXP. DATE (MM/YY) <br/>
        <input name='date' type='text' placeholder='MM'onChange={e => setMonth(`${e.target.value} / ` )} required={true}/>
        <input name='date' type='text' placeholder='YY' onChange={e => setYear(e.target.value)} required={true} />
      </label>
      <label className='form__label-cvc' htmlFor='cvc'>
      CVC <br/>
        <input type='text' name='cvc' placeholder='e.g. 123' required={true}/>
      </label>
    </div>
    <button className='form__button' >Confirm</button>
  </form>
    }
    {submit &&
      <div className='submited__container'>
        <span className='submited__icon'/>
        <h1>THANK YOU!</h1>
        <h5>We've added your card details</h5>
        <button type='button' onClick={handleSubmit}>Continue</button>
      </div>
    }
  </div>
  )
}

export default Main