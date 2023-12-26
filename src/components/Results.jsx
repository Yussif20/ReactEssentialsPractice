import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Results = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  return (
    <div></div>

    // <section id="result">
    //   <table>
    //     <thead>
    //         <tbody></tbody>
    //     </thead>
    //   </table>
    // </section>
  );
};

export default Results;
