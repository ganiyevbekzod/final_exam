import "./Register.css"
import Eye from "../../assets/images/Eyes.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
export const Register   =()=>{
    const naviget = useNavigate()

    const inpuRef = useRef()

    const hendleOpen = () => {
        if (inpuRef.current.type === 'password') {
            inpuRef.current.type = 'text'
        } else {
            inpuRef.current.type = 'password'
        }
    }
    const hendlSubmit = (evt) => {
        evt.preventDefault()
        console.log(inpuRef.current.value);

        localStorage.setItem('token',inpuRef.current.value)

        naviget('/')
        inpuRef.current.value=''
        location.reload()
        toast.success("Bajarildi!")
    }
    return(
        <div className="container">
            <div className="d-block w-50 mx-auto mt-5 p-5 shadow">
            <span className="register_span_title">
            <h5 className="register_title">Ro'yxatdan o'tish</h5>
            </span>
            <form onSubmit={hendlSubmit} className="d-block">
            <label className="d-block">      
                            <input className="form-control  text-black border-0 border-bottom mb-4 mt-3 " type="text" placeholder="Foydalanuvchi nomi" />
                        </label>
            <label className=" mb-3 w-100">      
                            <input className="form-control  text-black border-0 border-bottom mb-4 mt-3 " type="mail" placeholder="Elektron pochta (optinal)" />
                        </label>

            <label className="mt-3 w-100">
                <span className="register_span ">
                Parolni o’ylab toping
                </span>
                <span className="input-group">
                <input ref={inpuRef}  className="form-control  text-black border-0 border-bottom " type="password"/>
                <button onClick={() => hendleOpen()} type='button' className='password_button rounded-pill border-0 bg-none'>
                            <img src={Eye} width='19' height='18' />
                        </button>
                </span>
                </label>
                <label className="register_text d-block mt-5">
                “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz <br/> 
                <span className="text-success">Foydalanish shartlarini qabul qilgan xisoblanasiz.</span>
                    </label> 
                <button className="register_btn d-block mx-auto mt-5 border-0" type="submit">
                Ro’yxatdan o’tish
                </button>
            </form>
            </div>
        </div>
    )
    
}
<ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                ToastContainer/> 