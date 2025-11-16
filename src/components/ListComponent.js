import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ListComponent(props) {
    const handleChange = (item) => {
        props.handleClick(item);
    };
    return (_jsx("ul", { children: props.list.map(item => (_jsx("li", { children: _jsxs("label", { children: [_jsx("input", { type: "radio", name: "item", onChange: () => handleChange(item) }), item.name] }) }, item.id))) }));
}
