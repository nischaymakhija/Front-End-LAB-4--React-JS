import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { pushData } from '../services/fetch';

const setDefaultDate = () => {
    const today = new Date();
    return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}

export default function ExpenseTracker() {
    const [payee, setPayee] = useState('Ramesh');
    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState('');
    const [date, setDate] = useState(setDefaultDate());

    const submitHandler = (e) =>{
        e.preventDefault();
        const data = pushData(payee, date, price, product);
    }

    const updateDate = (e) => {
        let date1 = (e.target.value);
        setDate(date1)
    }


    return (
        <div className='container form'>
            <div className = 'addPage-header'>
                <h2>Add New Item</h2>
                <p>
                    Read the below Instruction before proceeding:
                    <br />
                    Make sure you fill all the fields where * is provided
                </p>
            </div>
            <form onSubmit={e=>{submitHandler(e)}} >
                <article>
                    <p>Name : </p>
                    <div>
                        <select name = "payee" value = {payee} onChange = {e=>setPayee(e.target.value)}>
                            <option value="Ramesh">Ramesh</option>
                            <option value="Rahul">Rahul</option>
                        </select>
                    </div>
                </article>
                <article>
                    <div>
                        <p>Product Purchased</p>
                        <input type='text' name = "product" value = {product} onChange = {e=>setProduct(e.target.value)} required/>
                    </div>
                </article>   
                <article> 
                    <div>
                        <p>Price</p>
                        <input type='number' name = "price" value = {price} onChange = {e=>setPrice(parseInt(e.target.value))} required/>
                    </div>
                </article>
                <article>
                    <div>
                        <p>Date</p>
                        <input type='date' name = "date" value ={date} onChange = {e=>updateDate(e)} required/>
                    </div>
                </article>
                <div className='form-buttons'>
                    <input className='form-button' type="submit"/>
                    <NavLink className='form-button' to = '/' style={{"textDecoration" : "none", "color" : "black", "fontWeight" : "bolder"}}>Close</NavLink>
                </div>
            </form>
        </div>
    )
}
