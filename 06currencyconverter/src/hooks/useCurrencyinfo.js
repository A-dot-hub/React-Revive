import { useEffect, useState } from "react";
function useCurrencyinfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?from=${currency}`)
      .then((res) => res.json)
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyinfo;
