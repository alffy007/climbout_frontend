import React from 'react'
import { useForm } from 'react-hook-form';
import "./Form.css";

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <div className='App'>
        <h1>Save a Friend</h1>
        <div className="register">
            <div className="col-1">
                <h2>Hey Hero , calm you're Anonymous!!!</h2>
                <span>Ready to Save your friend and be a <br></br>Hero!!!</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input className='namebar' type="text" {...register("name")} placeholder='Name of the person to be rescued' />
                    <input className='namebar' type="text" {...register("school")} placeholder='Which School is he?' />
                    <textarea  className="details" type="text" {...register("description")} placeholder='Reason why you think he needs help' />
                    <button className='btn'>Save him</button>
                </form>

            </div>
        </div>
    </div>
  )
}