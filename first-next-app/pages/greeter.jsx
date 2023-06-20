import { useEffect, useState } from "react";

function Greeter(){
    
    console.log(process.window ? 'client' : 'server');
    
    let [greetMsg, setGreetMsg] = useState('[default greet message]')
    let [userName, setUserName] = useState('');

    const onBtnGreetClick = () => {
        setGreetMsg('Hi ' + userName + ', Have a nice day!');
    }

    const onTxtUserNameInput = (evt) => {
        setUserName(evt.target.value)
    }

    //presentation
    return (
        <div>
            <h3>Greeter</h3>
            <label htmlFor="">User Name :</label>
            <input type="text" onInput={onTxtUserNameInput}/>
            <button onClick={onBtnGreetClick}>Greet</button>
            <div className="message">{greetMsg}</div>
        </div>
    );
}

export default Greeter;