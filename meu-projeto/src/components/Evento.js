import Button from './eventos/Button'

function Evento() {

    function meuEvento(){
        console.log(`Ativado! meu primeiro evento`)
    
    }

    function segundoEvento(){
        console.log(`Ativado! meu segundo evento`)
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text='primeiro evento'/>
            <Button event={segundoEvento} text='segundo evento'/>
        </div>
    )
}

export default Evento