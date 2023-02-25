const Total = (props) => {
    return (
        <div>
            Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
        </div>
    )
}

export default Total;