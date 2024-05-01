/* 6.3 | React, useRef, useState, useEffect, reconcilliation, re-rendering, useMemo, useCallback - with examples */

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <button onClick={function(){
//         setCount(count + 1);
//       }}>Count {count}</button>
//     </>
//   );
// }

// export default App;

/* useEffect */

// import { useEffect, useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(function () {
//     setTimeout(() => {
//       setBankData({ income: 100 });
//     }, 3000);
//   });

//   useEffect(function () {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100,
//       });
//     }, 1000);
//   });

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return <div>hi, there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

/* useMemo */

// import { useEffect, useMemo, useState } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(function () {
//     // some operation to get the data
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(function () {
//     // some operation to get the data
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(function () {
//     // some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     }, 5000);
//   }, []);

//   const cryptoReturns = useMemo(() => {
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data, exchange2Data]);

//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return <div>hi, there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

/* useCallback */

// import { useEffect, useMemo, useState, memo, useCallback } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(function () {
//     // some operation to get the data
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(function () {
//     // some operation to get the data
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(function () {
//     // some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     }, 5000);
//   }, []);

//   // useCallback is not about minimizing the amount of code that is run
//   // useCallback is about not rendering a child component, if the function hasn't/doesn't need to change across renders

//   const calculateCryptoReturns = useCallback(() => {
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data, exchange2Data]);

//   return (
//     <div>
//       <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
//       {/* <Dummy></Dummy> */}
//     </div>
//   );
// }

// // memo & useMemo are two different functions
// // const Dummy = memo(function Dummy() {
// //   return <div>Hi</div>;
// // });

// const CryptoGainsCalculator = memo(({ calculateCryptoReturns }) => {
//   console.log("crypto child re-rendered");

//   return <div>Your crypto returns are {calculateCryptoReturns()}</div>;
// });

// export default App;

/* useRef */
import { useEffect, useRef } from "react";

function App() {
  const divRef = useRef();

  useEffect(function () {
    setTimeout(() => {
      divRef.current.style.backgroundColor = "red";
    }, 5000);
  }, []);

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
