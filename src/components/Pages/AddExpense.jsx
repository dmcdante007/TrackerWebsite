import React, {useRef} from "react";

const styles = {
    backgroundColor: 'red',
    fontSize: '20px',
    height: '20px'
}
const AddExpense = ()=> {
    const expense = useRef();
    const desc = useRef();
    const category = useRef();

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

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    };

    const buttonHoverStyle = {
        backgroundColor: 'darkblue'
    };

    return (
        <div style={containerStyle}>
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
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Submit
            </button>
        </div>
    );
};

export default AddExpense