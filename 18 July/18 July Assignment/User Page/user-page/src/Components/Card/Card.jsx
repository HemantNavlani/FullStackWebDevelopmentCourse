import { useState } from 'react'
import './Card.css'

function Card(props){
    const [status, setStatus ] = useState(props.type);
    let btntext 
    if (status=='signin'){
        btntext = 'Sign In'
    }
    else if (status == 'signup'){
        btntext = 'Sign Up'
    }

    let btntext2 
    if (status=='signin'){
        btntext2 = 'Sign Up'
    }
    else if (status == 'signup'){
        btntext2 = 'Sign In'
    }

    return(
        <>
        <div className='card'>
        <img src= 'https://www.shutterstock.com/image-vector/zdolbuniv-ukraine-march-29-2023-260nw-2281736183.jpg'></img>
        <form>

        {
                status=='signup' && (
                    <>
                    <input type="text" placeholder='Mobile Number or Email' />
                     <input type="text" placeholder='Full Name' />
                    </>
                )
        }

            
            <input type="text" placeholder='Phone Number, Username or Email' />
            <input type="text" placeholder='Password' />
            <button className='btn' > {btntext}</button>
        </form>
        <span>Don't have account ?</span>  <button className='btn2' onClick={()=>{
            if (status=='signin') setStatus('signup')
            else if (status=='signup') setStatus('signin')
    }} >{btntext2}</button>
        </div>
        </>
    )
}

export default Card