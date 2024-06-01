function Saudacao({nome}){

    function gerarSaldacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }

    return <>{nome && <p>{gerarSaldacao(nome)}</p>}</>
}

export default Saudacao