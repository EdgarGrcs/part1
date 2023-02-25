

const Button = (props) => {

return (
    <div>
        <button onClick={props.handleClick[0]}>{props.text[0]}</button>
        <button onClick={props.handleClick[1]}>{props.text[1]}</button>
        <button onClick={props.handleClick[2]}>{props.text[2]}</button>
    </div>
)
}


export default Button;