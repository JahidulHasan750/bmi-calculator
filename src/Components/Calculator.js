import React, { useState } from 'react'

const Calculator = () => {
    const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const [bmi,setBmi]=useState('');
    const [message,setMessage]=useState('');

  
  

    const calcBmi=()=>{
    
        if(weight==0 || height==0){
            alert('Please enter a valid weight and height');
        }
        else{
            const mHeight=height/100;
           
            const bmiTotal=(weight/(mHeight*mHeight));
            setBmi(bmiTotal.toFixed(1));
           
            if(bmiTotal<18.5){
                setMessage('You are underweight');

            }
            else if(bmiTotal>=18.5 && bmiTotal<25){
                setMessage('you are healthy');
            }
            else if(bmiTotal>=25 && bmiTotal<30){
                setMessage('you are overweight')
            }
            else{
                setMessage('you are obese');
            }
        }
    }
   let imgSrc;
        if(bmi<1){
            imgSrc=null;
        }
        else {
            if(bmi<18.5){
                imgSrc=require('../assets/u.png');
        }   
        else if(bmi<25){
            imgSrc=require('../assets/h.png');

        }
        else if(bmi<30){
            imgSrc=require('../assets/o.png');
        }
        else{
            imgSrc= require('../assets/oo.png')
        }
        }
       const reload=()=>{
        window.location.reload();
       }
   
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className=' w-[400px]  h-[75%] border rounded-md shadow-lg '>
                <h1 className='pt-5 text-center font-bold text-3xl'>BMI Calculator</h1>
           
            <div className='flex flex-col px-5 mt-5 py-3'>
                <label className='text-xl pb-3'>Weight(kgs)</label>
                <input onChange={(event)=>setWeight(event.target.value)} id='weight' className='border border-gray-400 p-2 rounded-md' type='text'></input>
            </div>
            <div className='flex flex-col px-5'>
                <label className='text-xl pb-3'>Height(cm)</label>
                <input onChange={(event)=>setHeight(event.target.value)} id='height' className='border p-2 rounded-md border-gray-400' type='text'></input>
            </div>
            <div className='flex flex-col w-full gap-4 pt-5'>
            <button onClick={calcBmi } type='submit' className='py-3 bg-gray-700 rounded-md ml-5 mr-5'>Submit</button>
            <button onClick={reload} type='submit' className='py-3 bg-white border border-gray-400 rounded-md ml-5 mr-5'>Reload</button>
            </div>
           
            <p className='text-center pt-5 text-xl font-bold'>Your BMI is:{bmi}</p>
            <p className='text-semibold text-center text-xl'>{message}</p>
            <div className=' flex justify-center'>
            <img className='w-[30%]' src={imgSrc}></img>
            </div>
            </div>
            
        </div>
    )
}

export default Calculator