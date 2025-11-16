import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyButton from './components/MyButton';
import ListComponent from './components/ListComponent';
function App() {
    const [count, setCount] = useState(0);
    const aOne = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
    ];
    const handleClick = (item) => {
        console.log("Selected item:", item);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("a", { href: "https://vite.dev", target: "_blank", children: _jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }), _jsx("a", { href: "https://react.dev", target: "_blank", children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })] }), _jsx("h1", { children: "Vite + React" }), _jsxs("div", { className: "card", children: [_jsx(MyButton, { onClick: () => setCount((count) => count + 1), label: `my button count is ${count}` }), _jsx(ListComponent, { handleClick: handleClick, list: aOne }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), _jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] }));
}
export default App;
