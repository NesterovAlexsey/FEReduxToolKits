import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { saveLogin } from "./authSlice"

export default function Login(): JSX.Element {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        dispatch(saveLogin(login))
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={login}
            placeholder="Enter your login"
            onChange={(e) => setLogin(e.target.value)}/>
            <button type="submit">Ok</button>
        </form>
    )
}
