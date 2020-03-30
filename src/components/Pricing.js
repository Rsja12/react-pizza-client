// component at bottom of cart route 
// displays subtotal, tax and total and does the calculation of price for current items in cart

import '../styles/Pricing.css'

import React, { Component } from 'react'

export class Pricing extends Component {


    calcSubtotal = () => {
        return (8.99 * this.props.cart.length).toFixed(2)
    }

    calcTax = () => {
        const jsCrazyNum = this.calcSubtotal() * 0.07
        return jsCrazyNum.toFixed(2)
    }

    calcTotal = () => {
        return (this.calcSubtotal() * 1.07).toFixed(2)
    }
        

    render() {
        return (
            <div className="price">
                <div className="ui middle aligned divided list">
                    <div className="item">

                        <div className="content">
                            Subtotal
                        </div>
                        <div className="right floated content">
                           ${ this.calcSubtotal() } 
                        </div>

                        <div className="content">
                            Tax ( 7% )
                        </div>
                        <div className="right floated content">
                           ${ this.calcTax() } 
                        </div>

                        <div className="content">
                            Total
                        </div>
                        <div className="right floated content">
                           ${ this.calcTotal() } 
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing


// const Pricing = (props) => {
//     console.log(props.pizza)
//     return (
//         <div className="price">
//             <div className="ui middle aligned divided list">
//             <div className="item">
//                 <div className="content">
//                     <div className="header">Subtotal</div>
//                     <div></div>
//                 <div className="right floated content">
//                     <div></div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Pricing
