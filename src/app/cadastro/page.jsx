'use client'

import Footer from "../../components/Footer"
import Header from "../../components/Header";
import { useState } from "react";

export default function Cadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    console.log({name, email, password})

    const response = await fetch(`http://localhost:4000/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })

    if(response?.ok) {
      const data = await response.json()
      console.log(data)
    
    }else {
      const data = await response.json()
      console.log(data)
    }
  }

  return (
    <>
      <Header />

      <main className="p-5">
          <h1 className="text-3xl">Cadastre-se</h1>

          <div className=" flex flex-col gap-1 p-5 w-[300px]">
            <label>Nome:</label>
            <input className="border text-black" type="text" value={name} onChange={event => setName(event.target.value)}/>

            <label>Email:</label>
            <input className="border text-black" type="text" value={email} onChange={event => setEmail(event.target.value)}/>

            <label>Senha:</label>
            <input className="border text-black" type="password" value={password} onChange={event => setPassword(event.target.value)}/>

            <button onClick={handleSubmit} className="border bg-neutral-300 text-black">Cadastrar</button>
            
          </div>
      </main>
      
      <Footer />
    </>
  )
}
