"use client";
import { useState, useEffect } from "react";
import Card from "../components/Card";
export default function Page() {
    const [Fruit, setFruit] = useState('apple');
    const ToApple = () => {
        setFruit('Apple');
    };
    const ToBanana = () => {
        setFruit('Banana');
    };
    const ToPapaya = () => {
        setFruit('Papaya');
    };
    useEffect(() => {
       document.title = `My Fruit is ${Fruit}`
    })

    return (
        <div>
            <h1 className="text-3xl text-center items-center"> {Fruit} </h1>
            <div><button onClick={ToApple} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">Apple</button></div>
            <div><button onClick={ToBanana} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">Banana</button></div>
            <div><button onClick={ToPapaya} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">Papaya</button></div>
            <Card src="/ronaldo.jpg" title="Player 1" />
            <Card src="/Messi.jpg" title="Player 2" />
            <Card src="/mbappe.png" title="Player 3" />
        </div>
    );
}