import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);  //use of custom hook
    
    const options = Object.keys(currencyInfo);
    //console.log(options);
    
  // console.log(currencyInfo[options]);

  
   

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    const swap = () => {
      setFrom(to);
      setTo(from);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/5746260/pexels-photo-5746260.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)} // overriding usestate("inr") value to updated value
                                selectCurrency={from}
                                onAmountChange={(amount) => {
                                    //setAmount(amount)
                                    if(amount === ''){
                                        setAmount('0');
                                        return;
                                    }
                                    const numericValue = parseFloat(amount);
                                    if (numericValue >= 0) {
                                            setAmount(numericValue);
                                    }
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}  // overriding usestate("inr") value to updated value
                                selectCurrency={to}   // selecting default value from state
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;