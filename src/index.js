import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
        name: "Foccacia",
        ingredients: "Bread with italian olive oil",
        price: 6,
        photoName: "pizzas/image.jpeg",
        soldOut: false
    },
    {
        name: "pizza spinachi",
        ingredients: "Bread with italian olive oil",
        price: 6,
        photoName: "pizzas/image.jpeg",
        soldOut: true
    }
]
function App() {
    return <div className="container"><Header /><Menu /><Footer />
    </div>
}

function Header() {
    const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
    return <h1 className="headers">Fast react pizaa company</h1>
}

function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length
    return <main className="menu">
        <h2>Our menu</h2>
        {numPizzas > 0 ?
            <React.Fragment>
                <p>Italian Pizza</p>

                <ul>
                    {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
                </ul>
            </React.Fragment>
            : <p>We still work on our menue</p>
        }

        {/* <Pizza name='Pizza spinachi' ingredient='Tomato, spinach' photoName='pizzas/image.jpeg' price={6} /> */}

    </main >
}
function Footer() {
    const hour = new Date().getHours()
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    // if (hour >= openHour && hour <= closeHour) alert("er are currently open"); else alert("sorry we are closed")
    return <footer className="footer">{isOpen ?
        <div>
            <p>We are currently open until {closeHour}</p>
            <button>Order</button>
        </div>
        : <p>We happy to welcome you here at {openHour}</p>

    }

    </footer>

    // return React.createElement('footer', null, 'Were currently open')

}

function Pizza({ pizzaObj }) {
    //if (pizzaObj.soldOut) return null
    return <li className={`pizza ${pizzaObj.soldOut ? 'soldOut' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>


    </li>

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode><App /></React.StrictMode>) 