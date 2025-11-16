import { jsx as _jsx } from "react/jsx-runtime";
export default function MyButton(props) {
    return (_jsx("button", { onClick: props.onClick, children: props.label }));
}
