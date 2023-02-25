
import StatisticLine from "./StatisticLine";

const Statistics = (props) =>{


return (
<table>
  <tbody>
    <tr>
      <td><StatisticLine feedback="good" count=""/></td>
      <td><StatisticLine feedback="" count={props.count[0]}/></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><StatisticLine feedback="neutral" count=""/></td>
      <td><StatisticLine feedback="" count={props.count[1]}/></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><StatisticLine feedback="bad" count=""/></td>
      <td><StatisticLine feedback="" count={props.count[2]}/></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><StatisticLine feedback="all" count=""/></td>
      <td><StatisticLine feedback="" count={props.count[3]}/></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><StatisticLine feedback="average" count=""/></td>
      <td><StatisticLine feedback="" count={props.count[4]}/></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><StatisticLine feedback="positive" count=""/></td>
      <td><StatisticLine feedback="" count={props.count[5]}/></td>
    </tr>
  </tbody>







</table>
  
) 



}



export default Statistics;


/*
<td> <StatisticLine feedback="good" count={props.count[0]}/></td>
     <td><StatisticLine feedback="neutral" count={props.count[1]}/></td>
     <td><StatisticLine feedback="bad" count={props.count[2]}/></td>
     <td><StatisticLine feedback="all" count={props.count[3]}/></td>
     <td><StatisticLine feedback="average" count={props.count[4]}/></td>
     <td><StatisticLine feedback="positive" count={props.count[5]}/></td>
      */