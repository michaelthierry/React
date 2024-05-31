import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat" ano={1997}/>
                <Item marca="Ford" ano={1967}/>
                <Item marca="Chevrolet" ano={1980}/>
                <Item/>
            </ul>
        </>
    )

}

export default List