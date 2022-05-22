import React, {useState} from "react";


const FlyingBlock = function () {

    const [blockPos, setBlockPos] = useState({x:0, y:0})
    
    function onDown(event) {
        //blockPos = event.clientX
        setBlockPos(event.clientX)
        console.log("X = " + event.clientX + "Y =" + event.clientY)
    }

       
    // console.log("X = " + blockPos.x + "Y =" + blockPos.y)
    return (
        
        <div id="dragElement" style={{
            position: 'relative',
            top: blockPos.y,
            left: blockPos.x,
            
            }}
            onMouseDown = {event => onDown(event)}
        >
                dafasdfasfasfsdfdas
        </div>
        
    );
    

}

export default FlyingBlock