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
        soldOut: false
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
        {numPizzas > 0 && <ul>
            {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
        </ul>}

        {/* <Pizza name='Pizza spinachi' ingredient='Tomato, spinach' photoName='pizzas/image.jpeg' price={6} /> */}

    </main >
}
function Footer() {
    const hour = new Date().getHours()
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    // if (hour >= openHour && hour <= closeHour) alert("er are currently open"); else alert("sorry we are closed")
    return <footer className="footer">{isOpen &&
        <div>
            <p>We are currently open until {closeHour}</p>
            <button>Order</button>
        </div>

    }

    </footer>

    // return React.createElement('footer', null, 'Were currently open')

}

function Pizza(props) {
    return <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price}</p>


    </li>

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode><App /></React.StrictMode>)