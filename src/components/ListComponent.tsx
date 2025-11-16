export default function ListComponent(props: { handleClick: (item: { id: number; name: string }) => void, list: { id: number; name: string }[] }) {

    const handleChange = (item: { id: number; name: string }) => {
        props.handleClick(item);
    };

    return (
        <ul>
            {props.list.map(item => (
                <li key={item.id}>
                    <label>
                        <input
                            type="radio"
                            name="item"
                            onChange={() => handleChange(item)}
                        />
                        {item.name}
                    </label>
                </li>
            ))}
        </ul>
    );
}
