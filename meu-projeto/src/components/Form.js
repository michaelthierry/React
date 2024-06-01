function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuario!")
    }

    return(
        <div>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placehilder="Dgite o seu nome"></input>
            </div>
            <div>
                <input type="submit" value="Cadastar"></input>
            </div>
        </form>
    </div>
    )
}

export default Form

