import "./Login.css"
import React, { useRef } from 'react'
import uzb from "../../assets/images/Rectangle 11.svg"
import Eye from "../../assets/images/Eyes.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export const Login=()=>{
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
            <span className="login_span_title">
            <h5 className="login_title">Kirish</h5>
            </span>
            <form onSubmit={hendlSubmit}>
            <label className="d-block  mx-auto">
                            <span className="login_span">
                            Telefon raqam
                            </span>
                            <div className="d-flex align-items-center ">
                            <img className="form_img me-1" src={uzb} />
                            <input className="form-control  text-black border-0 border-bottom mb-4 mt-3 " type="phone" placeholder="+998 94 681 42 32" />
                            </div>
                        </label>
            <label className="mt-3 w-100">
                <span className="login_span ">
                Parol
                </span>
                <span className="input-group">
                <input ref={inpuRef}  className="form-control  text-black border-0 border-bottom " type="password"/>
                <button onClick={() => hendleOpen()} type='button' className='password_button rounded-pill border-0 bg-none'>
                            <img src={Eye} width='19' height='18' />
                        </button>
                </span>
                </label>
                <button className="login_btn d-block mx-auto mt-5 border-0" type="submit">
                Tizimga kirish
                </button>
            </form>
            </div>
            <div>
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
                </div>
        </div>
    )
    }