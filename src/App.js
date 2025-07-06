
import './App.css';
// import {  useState,useEffect,useRef,forwardRef,useReducer} from 'react';
// import { Mail, Lock, User } from "lucide-react";
// import {v4 as uuid} from 'uuid'
import {Button} from './components/button/index.jsx'
import { useCount } from './components/context/count-context.js';
//  const Incrementbutton= (props) =>{
//  const {count,setcount}=props
//   const onincrement=()=>{
//      setcount(count+1)
//   }
//   return(
//    <button onClick={onincrement}>Increment</button>
//   );
//  }
//  const Decrementbutton=({count,setcount})=>{
  
//   const ondecrement=()=>{
//     setcount(count-1)
//   }
//   return (
//     <button onClick={ondecrement}>Decrement</button>
//   );
//  }
// const allbrands=[
//   {id:"1",brandname:"puma"},
//   {id:"2",brandname:"addidas"},
//   {id:"3",brandname:"nike"},
//   {id:"4",brandname:"fila"},
//   {id:"5",brandname:"reebok"}
// ]
// const Mybutton=forwardRef((props,ref)=>{
//   return (
//     <input ref={ref} placeholder='type'/>
//   )
// })

  

function App() {


// let timerref=useRef('rohit')
//  const [count,setcount]=useState(0);
 
//  const onstartcount=()=>{
//      timerref.current=setInterval(()=>{
//       setcount(count=>count+1)
      
//      },100)
//      console.log(timerref.current)
//  }
//  const onstopcount=()=>{
//    console.log(timerref.current)
//    clearInterval(timerref.current)
//  }


// const inputref=useRef();
// const onfocusclick=()=>{
//   inputref.current.focus();
// }




// const countreducer=(state,action)=>{
//   switch(action.type){
//     case 'increment':
//       return {count:state.count+1}
//     case 'decrement':
//       return {count:state.count-1}
//     default:
//       return state;
//   }
// }
// const initialstate={count:0}
// const [state,countdispatch]=useReducer(countreducer,initialstate);


// const initial={count:0}
// const [state,dispatch]=useReducer((state,action)=>{
//    switch(action.type){
//       case 'increment':
//         return {count:state.count+1}
//       case 'decrement':
//         return {count:state.count-1}
//       case 'reset':
//           return {count:0}
//       default:
//         return state;        
//    }

// },initial)


// const [count,setcount]=useState(0);

const {count,setCount}=useCount()
const onincremet=()=>{
  setCount(count+1);
}


return (
   <>
    {/* <Incrementbutton count={count} setcount={setcount}/>
    <span>the value is {count}</span>
    <Decrementbutton count={count} setcount={setcount}/> */}
     {/* <input onChange={onsearchchange} placeholder='search a brand'/>
     <ul>
      {
        brands.map(brand=> <li key={brand.id}>{brand.brandname}</li>)
      }
     </ul> */}

     {/* <div> <p> Add brand to your Card</p>
     {
       allbrands.map(brand=> <div key={brand.id}>
        <span>{brand.brandname}</span>
        <button onClick={()=>onaddtocart(brand.id)}>Add to Cart</button>
       </div>)
     }
     </div>
     <div>
      <p>your cart</p>
      {
        selectbrand && selectbrand.map((brand, idx)=><span key={idx}>{brand.brandname} </span>)
      }
     </div> */}

     {/* <div>
      <div>
        <h1>My wishlist</h1>
        <input value={todoinput} onChange={ontodoinputchange} placeholder='Add your wishlist here..'/>
        <button onClick={onaddtodoclick}>Add</button>
      </div>
      <div>
    {
       todolist?.length>0 && todolist.map(todo=>(
        <div key={todo.id}>
          <label>
            <input onChange={()=> ontodocheckchange(todo.id)} type='checkbox'/>
            <span className={todo.iscompleted? 'strike-through':''}>{todo.todoinput}</span>
          </label>
          <button onClick={()=> ondeleteclick(todo.id)}>Delete</button>
        </div>
      ))
    }
      </div>
     </div> */}
    
       {/* <button onClick={onstartcount}>start-{count}</button>
        <button onClick={onstopcount}>stop</button>
       */}

        {/* <input ref={inputref} placeholder='type'/> */}

        {/* <Mybutton placeholder="type" ref={inputref}/>     
        <button onClick={onfocusclick}>focus</button> */}
    
        {/* <h1>count is:{state.count}</h1> */}
        {/* <button onClick={()=>countdispatch({type:'increment'})}>Inc</button>
        <button onClick={()=>countdispatch({type:'decrement'})}>Dec</button> */}

        {/* <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button> */}

        <Button/>


   </>
  );

}



export default App;
