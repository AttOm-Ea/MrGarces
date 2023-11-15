import React from 'react';
import { useForm } from 'react-hook-form';

function Modal({imgZoom, setImgZoom}) {

    const { register, handleSubmit } = useForm();

    const submit = data => {
		console.log(data)
}

    return (
        <div className={`h-screen bg-black/75 fixed top-0 overflow-auto duration-500  ${ imgZoom? "w-full left-0 p-5 md:px-60 md:py-12 ":"left-[50%] w-0 h-0"}`}  >
            <div className='w-full h-full bg-white rounded-2xl overflow-auto'>
                <div className='w-full h-12 flex justify-end pr-5'>
                    <button className='h-10' onClick={()=>setImgZoom(!imgZoom)}> X </button>    
                </div>
                <form onSubmit={handleSubmit(submit)} className=' h-5/6 flex md:items-center flex-col ju p-4'>
                        <div className='flex w-full justify-center items-center py-5'>
                            <img className="w-5/12 md:w-2/12" src="../../public/img/LogoBlack.webp" alt=""/>
                        </div>
                        
                        <span className='text-center'> ¿Ya estas registrado? </span>
                        <div className='w-full  flex justify-center my-2 '>
                            <div className='w-1/3 md:w-1/5 flex justify-between'>
                                <input  type="radio" id="contactChoice1" name="contact" value="email" />
                                <label htmlFor="contactChoice1">Sí </label>
                                <input type="radio" id="contactChoice2" name="contact" value="phone" />
                                <label htmlFor="contactChoice2">No</label>
                            </div>    
                        </div>
                        
                        <div>
                            <label htmlFor='email-input'>Email: </label>
                            <input className='ml-1 -mt-7 border-b-2' type='email' id='email-input' {...register("email")} />
                        </div>
                        <div >
                            <label htmlFor='password-input'>Password: </label>
                            <input className='ml-1 border-b-2' type='password' id='password-input' {...register("password")} />
                        </div>

                        <span className='mt-6'> Seleccione la fecha deseada: </span>

                        <div className='my-2'>
                            <label htmlFor=""> Date:</label>
                            <input className='ml-1 border-b-2' type="date" />
                        </div>

                        <select className='m-2' name="select">
                            <option value=""> Selecciona tu barber  </option>
                            <option value="value1"> Yayo </option>
                            <option value="value3"> Cheli </option>
                        </select>

                        <select className='m-2' name="select">
                            <option value=""> Escoge en tu horario   </option>
                            <option value="value1"> 12:00 </option>
                            <option value="value3"> 12:30 </option>
                            <option value="value1"> 1:00 </option>
                            <option value="value3"> 1:30 </option>
                            <option value="value1"> 3:00 </option>
                            <option value="value3"> 4:30 </option>
                            <option value="value3"> 5:00 </option>
                            <option value="value3"> 6:30 </option>
                        </select>

                        <div className='w-full flex justify-center'>
                            <input className="border p-2 rounded-xl" type="submit" value="Agendar Cita" />    
                        </div>
                        
                </form>    
            </div>
            
        </div>
    );
}

export default Modal;