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
    return <main className="menu"><h2>Our menu</h2><Pizza /></main >
}
function Footer() {
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    // if (hour >= openHour && hour <= closeHour) alert("er are currently open"); else alert("sorry we are closed")
    return <footer className="footer">{new Date().toLocaleTimeString()}. We are currently open</footer>
    // return React.createElement('footer', null, 'Were currently open')

}

function Pizza() {
    return <div className="pizza">
        <img src="pizzas/image.jpeg" alt="Pizza spinachi" />
        <h2>Pizza spinachi</h2>
        <p>tomato, olive oil</p>
    </div>

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode><App /></React.StrictMode>)