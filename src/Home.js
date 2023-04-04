import React from "react";
import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Books from "./Books";

function Home() {

    const [books, setBooks] = useState(data);

    const chosenBooks = (searchTerm) => {
        const newBooks = data.filter(element => element.searchTerm === searchTerm);
        setBooks(newBooks);
    }

    return(<div>
        <Buttons chosenBooks={chosenBooks}/>
        <Books itemForSale={books}/>
    </div>
    )
}

export default Home;