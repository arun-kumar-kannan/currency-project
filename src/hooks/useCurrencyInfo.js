// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//   }, [currency]);

//   return data;
// }

// export default useCurrencyInfo;

import { useState, useEffect } from "react";

const currencyData = {
  usd: {
    usd: 1,
    inr: 87.5,
    eur: 0.86,
    gbp: 0.74,
    jpy: 148.2,
    aud: 1.52,
    cad: 1.37,
  },

  inr: {
    usd: 0.0114,
    inr: 1,
    eur: 0.0098,
    gbp: 0.0085,
    jpy: 1.69,
    aud: 0.0174,
    cad: 0.0157,
  },

  eur: {
    usd: 1.16,
    inr: 101.5,
    eur: 1,
    gbp: 0.86,
    jpy: 172.5,
    aud: 1.77,
    cad: 1.59,
  },
};

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(currencyData[currency] || {});
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
