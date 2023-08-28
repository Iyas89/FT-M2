import React from 'react'
// import { useState } from 'react';
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export default function Contact () {
  const [inputs, setinputs] =  React.useState({
    name:'',
    email:'',
    message:'',
  })

  const [errors, setErrors] =  React.useState({
    name:'',
    email:'',
    message:'',
  })

function handleChange(evento){
  setinputs({
    ...inputs,
    [evento.target.name]: evento.target.value
  })
  setErrors(
    validate({
       ...inputs,
       [evento.target.name]: evento.target.value,
    })
  );
}
// function handleSubmit(event) {
//   event.preventDefault();
// setinputs([
//   if(errors.length === 0){
//   ])
//   }

// }

  return <div>
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input className={errors.name && 'warning'}
      name='name' placeholder="Escribe tu nombre..."
       type='text' value={inputs.name}
       onChange={handleChange}/>
       <p className='danger'>{errors.name}</p>
      <br/>
      <label htmlFor="Correo Electrónico">Correo Electrónico:</label>
      <input className={errors.email && 'warning'}
      name='email' placeholder="Escribe tu email..."
       type='text' value={inputs.email}
       onChange={handleChange}/>
       <p className='danger'>{errors.email}</p>
      <br/>
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea className={errors.message && 'warning'}
      name='message' placeholder="Escribe tu mensaje..." 
      type='text' value={inputs.message}
      onChange={handleChange}/>
      <p className='danger'>{errors.message}</p>
      <br/>
      <button type='submit' onClick={handleSubmit}>Enviar</button>
    </form>
  </div>
}


export function validate(inputs) {
  let errors={};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
 }  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
 }  if(!inputs.message){
    errors.message =  "Se requiere un mensaje";
  } 
    
return errors;
}
