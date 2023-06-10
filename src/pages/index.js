import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [data, setData] = useState({
    name: '',
    email: ''
  });

  const valueInput = (e) => setData({...data, [e.target.name]:e.target.value})
  

  const addUser = (e) => {
    e.preventDefault()//Manter comportamento padrão.
    console.log("Enviar dados") // certificando que os dados foram enviados.
    console.log(data)//Chama função
  }
  return (
    <>
      <Head>
        <title>CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <h2>Cadastrar</h2>

        <form onSubmit={addUser}> 
          <label>Nome:</label>
          <input type='text' name='name' placeholder='Digite o nome' onChange={valueInput} /><br/><br/>
          <label>Email:</label>
          <input type='email' name='email' placeholder='Digite o email' onChange={valueInput} /><br/><br/>
          <button type='submit' >Enviar</button><br/><br/>
        </form>

      </main>
    </>
  )
}
