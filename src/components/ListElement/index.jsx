import ListItem from "../ListItem";
import { useState } from "react";

function ListElement() {
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function addToStorage(item) {
       setInputValue(item);
       console.log(item);
    }

    return (
        <>
            <h1>TODO LIST</h1>
            <input type="text" value={inputValue} onChange={handleChange}></input>
            <button onClick={() => {addToStorage(inputValue)}}>Submit</button>
            <ListItem listItem={inputValue}/>
        </>
    )
};


export default ListElement;
