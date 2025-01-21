"use client";
import { useState, useEffect } from "react";
export default function page() {
    const [Fruit, setFruit] = useState('apple');
    const ToBanana = () => {
        setFruit('Banana');
    };
    const ToCoconut = () => {
        setFruit('Coconut');
    };
    useEffect(() => {
       document.title = `My Fruit is ${Fruit}`
    })

    return (
        <div>
            {Fruit}
            <div><button onClick={ToBanana}>Banana</button></div>
            <div><button onClick={ToCoconut}>Coconut</button></div>
        </div>
    );
}