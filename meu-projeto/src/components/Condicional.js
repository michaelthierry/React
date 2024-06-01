import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(e){
        setUserEmail("")
        
    }

    return(
        <idv>
            <h1>Cadastrar seu e-mail:</h1>
            <form>
                <input type='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={enviarEmail}>Enviar email</button>
                {
                    userEmail && (
                        <div>
                            <p>O e-mail do usuário: {userEmail}</p>
                            <button onClick={limparEmail}>Limpar Email</button>
                        </div>
                    )
                }
            </form>
        </idv>
    )
}

export default Condicional