import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import ContextApi from "../Context";

const styles = {
  backgroundColor: "red",
  fontSize: "20px",
  height: "20px",
};
const AddExpense = () => {
  const expense = useRef();
  const desc = useRef();
  const category = useRef();
  const [data, setData] = useState([]);
  let arr = [];
  const ctx = useContext(ContextApi)
  
  const containerStyle = {
    width: "100%",
    margin: "20px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "2px solid black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  };

  const inputStyle = {
    margin: "0 10px",
    padding: "5px",
    flex: "1",
  };

  const addDetailsToDB = (e) => {
    e.preventDefault();

    const newExpense = {
      amount: expense.current.value,
      desc: desc.current.value,
      cat: category.current.value,
    };

    axios
      .post('https://practice-e0b6c-default-rtdb.firebaseio.com/data.json', newExpense)
      .then(() => {
        ctx.totalExpense(newExpense.amount)
        // console.log(ctx.totalIs)
        // ctx.pushObj(newExpense)
        // console.log(ctx.arrIs.value)
        alert('Success');
        fetchData(); // Refresh data after adding new item
      })
      .catch((error) => console.error('Error adding data:', error));
  };

  const fetchData = ()=>{
    
    axios
      .get("https://practice-e0b6c-default-rtdb.firebaseio.com/data.json")
      .then((response) => {
        if (response.data) {
          const fetchedData = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setData(fetchedData);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  const deleteItem = (id) => {
    axios
      .delete(`https://practice-e0b6c-default-rtdb.firebaseio.com/data/${id}.json`)
      .then(() => {
        alert('Item deleted');
        fetchData(); // Refresh data after deletion
      })
      .catch((error) => console.error('Error deleting item:', error));
  };

  const editItem = (id) => {
    const updatedExpense = {
      amount: prompt('Enter new amount:'),
      desc: prompt('Enter new description:'),
      cat: prompt('Enter new category:'),
    };

    axios
      .put(`https://practice-e0b6c-default-rtdb.firebaseio.com/data/${id}.json`, updatedExpense)
      .then(() => {
        alert('Item updated');
        fetchData(); // Refresh data after update
      })
      .catch((error) => console.error('Error updating item:', error));
  };

  return (
    <>
      <div style={containerStyle}>
        <form onSubmit={addDetailsToDB}>
          <input
            style={inputStyle}
            type="number"
            placeholder="Add Expense"
            ref={expense}
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Add Description"
            ref={desc}
          />
          <select style={inputStyle} ref={category}>
            <option>Food</option>
            <option>Petrol</option>
            <option>Salary</option>
            <option>Bills</option>
            <option>Other...</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.cat} {item.desc} {item.amount}
            <button onClick={() => editItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddExpense;
