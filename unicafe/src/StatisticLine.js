


const StatisticLine = (props) => {



    return (
       <table>
        <tbody>
            <tr>
                <td>{props.feedback} {props.count} </td>
            </tr>
        </tbody>
        </table>
    )
}


export default StatisticLine;