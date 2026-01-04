
import React, { useState } from "react";
import Header from "./header";
import Content from "./contents";

function App() {
    const [color, setColor] = useState("");

    return (
        <div className="app">
            <Header title="Change colour" />
            <Content color={color} setColor={setColor} />
        </div>
    );
}

export default App;

