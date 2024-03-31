import { useState } from "react";
export default function Player({initialName, symbol, isActive}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing]= useState(false);

    function handleEditClick(){
        setEditing((editing) => !editing); // schedules a state update to true -- good practice to use a function 

    }

    function handlechange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';
    if (isEditing){
        editablePlayerName= <input type='text' required value={playerName} onChange={handlechange}/>;
        btnCaption= 'Save';
    }

    


    return(

        <li className={isActive?'active':undefined}>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
          </li>

    );
}