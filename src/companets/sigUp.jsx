import { useEffect, useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./notifyTost";
import { Valadition } from "./valdition"
import styles  from './../assets/input.css'

export default function Login() {



    ///const [inp, setInp] = useState
    const [data, setDate] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accepted: false
    })

   

    const [errors, setErrors] = useState({})
    const [focus, setFocus] = useState({})
    useEffect(() => {
        setErrors(Valadition(data))
      /*   console.log(errors); */
    }, [data, focus])



    let lab = document.querySelectorAll('label')
    lab.forEach((val) => {
        val.innerHTML = val.innerText.split('').map((letter, i) => `<span class="_span" style='transition-delay:${i * 50}ms'>${letter}</span>`).join('');

    })



    const changeHandler = event => {


        if (event.target.name === "accepted") {
            setDate({ ...data, [event.target.name]: event.target.checked })
        } else {
            setDate({ ...data, [event.target.name]: event.target.value })
        }
 
    }

    const focucHandaler = event => {

        setFocus({ ...focus, [event.target.name]: true })
    }


    const submitHandaler = event => {
        event.preventDefault()

        if (!Object.keys(errors).length) {
            notify("you signed successfully", "success")
        } else {
            notify("Data is invalid", "error")
            setFocus({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                accepted: true
            })
        }
    }

    /*    const notify = () => toast("Wow so easy!"); */


    return (
        <section className="col-12">

            <h1 className="text-center title">Sig Up</h1>
            <form onSubmit={submitHandaler} action="" className="row justify-content-center mx-0 px-0 " id="from">
                <div className="col-10 row justify-content-center ">
                    <label className="col-12 mx-0 px-0 " >Name</label>
                    <input
                        className="para col-12 mx-auto"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focucHandaler} />
                    {errors.name && focus.name && <span className='formField' >{errors.name}</span>}
                </div>

                <div className="col-10 row justify-content-center">
                    <label className="col-12 mx-0 px-0 ">Email</label>
                    <input
                         styles={(errors.email && focus.email) ? styles.uncompleted : styles.completed}
                        className="para col-12 mx-auto"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focucHandaler} />
                    {errors.email && focus.email && <span className='formField'>{errors.email}</span>}
                </div>

                <div className="col-10 row justify-content-center">
                    <label className="col-12 mx-0 px-0 " >Password</label>
                    <input
                        className="para col-12 mx-auto"
                        type="password"

                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focucHandaler} />
                    {errors.password && focus.password && <span className='formField'>{errors.password}</span>}
                </div>

                <div className="col-10 row justify-content-center">
                    <label className="col-12 mx-0 px-0 " >Confirm Password</label>
                    <input
                        className="para col-12 mx-auto"
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focucHandaler} />
                    {errors.confirmPassword && focus.confirmPassword && <span className='formField'>{errors.confirmPassword}</span>}
                </div>

                <div className="col-10 row justify-content-center align-items-center">

                    <p className="col-12 mx-0 px-0 mb-3 " >I accepted</p>
                    <input className="para col-12 mx-auto" type="checkbox" name="accepted" value={data.accepted} onChange={changeHandler} onFocus={focucHandaler} />
                    {errors.accepted && focus.accepted && <span className="mt-3 formField">{errors.accepted}</span>}
                </div>

                <div className="row  justify-content-center">
                    <button>Log In</button>
                </div>


            </form>
            <ToastContainer />
        </section>
    )
}