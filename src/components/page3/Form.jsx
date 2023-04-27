import React from 'react'
import { useForm } from 'react-hook-form';
import "./Form.css";

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <div className='App'>
       <h1>Report a Drug Sight</h1>
        <div className="register">
            <div className="col-1">
            <h2>Hey Hero , calm you're Anonymous!!!</h2>
                <span>Have you seen any suspicious activity Report it!! be a Hero</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input className='namebar' type="text" {...register("place")} placeholder='where have you seen it?' />
                    <input className='namebar' type="text" {...register("date")} placeholder='Which day did you see it?' />
                    <input className='namebar' type="text" {...register("time")} placeholder='Time at which you saw it?' />
                    <textarea  className="details" type="text" {...register("description")} placeholder='why you felt the event to be fishy' />
                                        <button className='btn'>Report</button>
                </form>

            </div>
        </div>
    </div>
  )
}