import React, { useState, ChangeEvent, FormEvent } from 'react'

import './CardForm.css'

interface FormErrors {
    cardNumber: boolean | undefined
    cvc: boolean | undefined
    expiry: boolean | undefined
}


const CardForm: React.FunctionComponent = () => {

    const [cardNumber, setCardNumber] = useState<string>('')
    const [cvc, setCvc] = useState<string>('')
    const [expiry, setExpiry] = useState<string>('')

    const [errors, setErrors] = useState<FormErrors>({cardNumber: undefined, cvc: undefined, expiry: undefined})

    const changeHandlerCardNumber = (event: ChangeEvent<HTMLInputElement>) => setCardNumber(event.target.value)

    const changeHandlerCVC = (event: ChangeEvent<HTMLInputElement>) => setCvc(event.target.value)

    const changeHandlerExpiry = (event: ChangeEvent<HTMLInputElement>) => setExpiry(event.target.value)

    const validateCardNumber = (value: string) => {
        // CVC must must be a number
        let regex = /^([\d]+)$/
        return regex.test(value)
    }

    const validateCvc = (value: string) => {
        // CVC must be a number
        let regex = /^([\d]+)$/
        return regex.test(value)
    }

    const validateExpiry = (value: string) => {
        // Expiry must be a date
        let date = new Date(value)
        return date.getDay() > 1
    }

    const validateForm = () => {
        return {
            cardNumber: validateCardNumber(cardNumber),
            cvc: validateCvc(cvc),
            expiry: validateExpiry(expiry)
        }
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        let validation = validateForm()
        setErrors({cardNumber: !validation.cardNumber, cvc: !validation.cvc, expiry: !validation.expiry})
        
        if(validation.cardNumber && validation.cvc && validation.expiry) {
            console.log(`Card Number: ${cardNumber}`)
            console.log(`CVC: ${cvc}`)
            console.log(`Expiry: ${expiry}`)
        } 
    }

    return(
        <div className="CardForm">
            <form onSubmit={onSubmit}>
                <div className='field'>
                    <input 
                        required
                        name='cardNumber'
                        type='text'
                        placeholder='card number' 
                        onChange={changeHandlerCardNumber}
                        value={cardNumber}
                    />
                  {errors.cardNumber && <p className='error'>Invalid card number</p>}
              </div>
              <div className='field'>
                    <input 
                        required
                        name='cvc' 
                        type='text' 
                        placeholder='cvc' 
                        onChange={changeHandlerCVC}
                        value={cvc}
                    />
                  {errors.cvc && <p className='error'>Invalid cvc</p>}
                </div>
                <div className='field'>
                    <input 
                        required
                        name='expiry' 
                        type='date' 
                        onChange={changeHandlerExpiry}
                        value={expiry}
                    />
                    {errors.expiry && <p className='error'>Invalid expiry</p>}
                </div>
                <div className="submit">
                    <input type="submit"/>
                </div>
            </form>
      </div>
    )
}

export default CardForm
