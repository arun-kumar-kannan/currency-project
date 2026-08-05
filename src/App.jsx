import { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  return (
    <>
      <div
        className="w-full bg-cover h-screen flex flex-wrap justify-center items-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1144259/pexels-photo-1144259.jpeg)`,
        }}
      >
        <InputBox label="From" amount={amount} />
        <InputBox label="To" amount={amount} />
      </div>
    </>
  );
}

export default App;
