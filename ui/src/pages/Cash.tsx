import { checkout } from "../checkout"

function Cash() {
    return ( 
        <div>  
            <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1PO5GA09hbLrB1bC5oNKJE10",
                    quantity: 1
                  }
                ]
              })
            })}>BUY!</button>
        </div>
     );
}

export default Cash;