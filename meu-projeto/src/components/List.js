import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat"/>
                <Item marca="Ford"/>
                <Item marca="Chevrolet"/>
            </ul>
        </>
    )

}

export default List