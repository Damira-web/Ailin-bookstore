function Buttons({chosenBooks}) {

    return(<div className="cont">
        <button className="change" onClick={()=>chosenBooks("children's stories")}>Children's stories</button>
        <button className="change" onClick={()=>chosenBooks("thriller")}>Thriller</button>
        <button className="change" onClick={()=>chosenBooks("school books")}>School books</button>
        <button className="change" onClick={()=>chosenBooks("sport")}>Sport</button>
        <button className="change" onClick={()=>chosenBooks("colouring book")}>Colouring book</button>
    </div>

    )

    
}

export default Buttons;