import React, {useState} from "react";


function MovebleBlock (props) {
    const [position, setPosition] = useState({left: 10, top: 10});
    
    
        
    const moveWindow = event => {
        const someBlock = event.target;
        someBlock.style.left = `${event.pageX - position.left}px`
        someBlock.style.top = `${event.pageY - position.top}px`
        
        console.log(" Лев.Верх.Угол/X =" + someBlock.style.left + " Лев.Верх.Угол/Y  =" +someBlock.style.top )

    }
    
    const addWindow = event => {
        const someBlock = event.target;
        position.left = event.clientX - someBlock.getBoundingClientRect().left;
        position.top = event.clientY - someBlock.getBoundingClientRect().top;
        someBlock.addEventListener('mousemove', moveWindow)
        
    }
    
    const removeWindow = event => {
        
        const someBlock = event.target;
        someBlock.removeEventListener('mousemove', moveWindow)
        console.log("\n\n Лев.Верх.Угол/X =" + someBlock.style.left + " Лев.Верх.Угол/Y  =" +someBlock.style.top )
        console.log(props)

        setPosition({
            left: someBlock.style.left,
            top: someBlock.style.top
        })
    }
   
    


    return (
        <div 
            id={props.id}
            className="Moveble-block"
            style={{left: position.left, top: position.top}}
            //draggable={true}
            onMouseDown = {addWindow}
            onMouseUp = {removeWindow}
            //onDragEnd={(event) => {dragEndHandler(event)}}
        >
          Блок
        </div>
    );
}


export default MovebleBlock; 