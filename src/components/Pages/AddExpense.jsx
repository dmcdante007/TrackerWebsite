import React, {useRef, useState} from "react";
import axios from "axios";

const styles = {
    backgroundColor: 'red',
    fontSize: '20px',
    height: '20px'
}
const AddExpense = ()=> {
    const expense = useRef();
    const desc = useRef();
    const category = useRef();
    const [arr, setArr] = useState([])

    const containerStyle = {
        width: "100%",
        margin: '20px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        border: '2px solid black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px'
    };

    const inputStyle = {
        margin: '0 10px',
        padding: '5px',
        flex: '1'
    };

   



    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const exp = expense.current.value;
        const descIs = desc.current.value;
        const cat = category.current.value;
        

        const obj = {
            exp : exp,
            desc: descIs,
            cat : cat,
        }
        addDetailsToDB(obj);

    }

    const addDetailsToDB = ((obj)=>{
        axios.post('https://practice-e0b6c-default-rtdb.firebaseio.com/data.json',{
            obj
        }).then((is)=>{
            alert('success')
            console.log(is)}).catch((err)=>console.log(err))


        axios.get('https://practice-e0b6c-default-rtdb.firebaseio.com/data.json').then((list)=>{
            const listIS = JSON.stringify(list)
            setArr(listIS)
        
        })
    })




    return (
        <>
        <div style={containerStyle}>
            <form onSubmit={onSubmitHandler}>
            <input style={inputStyle} type="number" placeholder="Add Expense" ref={expense}/>
            <input style={inputStyle} type="text" placeholder="Add Description" ref={desc}/>
            <select style={inputStyle} ref={category}>
                <option>Food</option>
                <option>Petrol</option>
                <option>Salary</option>
                <option>Bills</option>
                <option>Other...</option>
            </select>
            <button 
                type="submit" 
                
            >
                Submit
            </button>
            </form>

            
        </div>
        <ul>
            <li>{arr.desc}</li>
        </ul>

        </>
        
    );
};

export default AddExpense