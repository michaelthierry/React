function Evento({numero}) {

    function meuEvento(){
        console.log(`Ativado! ${numero}`)
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick={meuEvento}>Ativar1</button>
        </div>
    )
}

export default Evento