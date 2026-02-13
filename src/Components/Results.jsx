import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results( {
  userInput
}) {
    const annualData = calculateInvestmentResults(userInput);
    console.log(userInput);
console.log(annualData);
    return (
        
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((data) =>  (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.annualInvestment)}</td>
                        </tr>
                    ))}
            </tbody>
            </table>
         
        
    );
}
