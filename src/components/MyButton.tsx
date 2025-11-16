
export default function MyButton(props: { onClick: () => void; label: string}) {
  return (
    <button onClick={props.onClick}>
        {props.label}
    </button>
  )
}