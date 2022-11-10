import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getDataFromServer } from '../services/fetch';

export default class purchase extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            error:'',
            sum:0,
            rahulPay:0,
            rameshPay:0, 
        }
    }

    fetchData=async()=>{
        try{
            const data = await getDataFromServer();
            this.setState({data:data})
            this.setShares();
        } catch {
            this.setState({error:'something is wrong'})
        }
    }
    componentDidMount(){
        this.fetchData();
    }

    setShares = () => {
        this.setState({sum: this.state.data.reduce((result, p)=>result+p.price, 0)});
        let rahulPay = 0;
        let rameshPay = 0;
        this.state.data.map(payee=> (
            payee.payeeName === "Rahul" ? rahulPay = rahulPay + payee.price : rameshPay = rameshPay + payee.price
        ));
        this.setState({
            rameshPay : rameshPay,
            rahulPay : rahulPay
        })
    }
  render() {
    return (
      <div>
                <div className="use-inline date header-color">Date</div>
                <div className="use-inline header-color">Product Purchased</div>
                <div className="use-inline price header-color">Price</div>
                <div className="use-inline header-color" style={{width: 112}}>Payee</div>
                <NavLink className='use-inline' id='Add-Button' to = '/add'>Add</NavLink>
            {
            this.state.data.map(user=>(
                <div key={user.id}>
                    <div className='use-inline date'>{user.setDate}</div>
                    <div className='use-inline'>{user.product}</div>
                    <div className='use-inline price'>{user.price}</div>
                    <div className={`use-inline ${user.payeeName}`}>{user.payeeName}</div>
                </div>
            ))
            }
            <hr />
            <div>
                <div className='use-inline'>
                    Total : 
                </div>
                <div className='use-inline total'>
                    {this.state.sum}
                </div>
            </div>
            <div>
                <div className='use-inline'>
                    Rahul Paid : 
                </div>
                <div className='use-inline Rahul'>
                    {this.state.rahulPay}
                </div>
            </div>
            <div>
                <div className='use-inline'>
                    Ramesh Paid : 
                </div>
                <div className='use-inline Ramesh'>
                    {this.state.rameshPay}
                </div>
            </div>
            <div>
                <div className='use-inline payable'>
                    {this.state.rahulPay>this.state.rameshPay ? 'Pay Ramesh' : 'Pay Rahul'} : 
                </div>
                <div className='use-inline pay'>
                    {Math.abs(this.state.rameshPay-this.state.rahulPay)}
                </div>
            </div>
        </div>
    )
  }
}
