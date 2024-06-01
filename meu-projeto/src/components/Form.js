import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} cadastrado com a senha ${password}!`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <labe htmlFor="name">Nome:</labe>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Digite seu nome'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <labe htmlFor="password">Senha:</labe>
                <input
                        type="password"
                        id='password'
                        name='password'
                        placeholder='Digite sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <div>
                <input type="submit" value="Cadastar"></input>
            </div>
        </form>
    </div>
    )
}

export default Form

