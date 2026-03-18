import { useState } from 'react';
import '../../App.css'
import { useBirthDataMutate } from '../data/BirthDataMutate';
import { IoSend } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void,
    date?: boolean
}
const InputData = ({label, value, date = false, updateValue}: InputProps) => {

    const format = date? "date" : "";

    return(
        <>
            <label className='font-bold font-(family-name:--secondary-font) pt-2'>{label}</label>
            <input type={format} className='w-1/2 border border-gray-100 shadow-sm rounded-4xl 
            text-center' value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
};

export function Registration(){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const {mutate, isPending} = useBirthDataMutate();

    const navigate = useNavigate();

    const handleSubmit = () => {
        mutate({name, date, city, country}, {
            onSuccess: (data) => {
                navigate('/dashboard', {state:data})
            }
        })
    }

    const isFormValid = name !== "" && date !== "" && city !== "" && country !== "";
    

    return(
            <div className={`border grid grid-cols-1 gap-3 text-center border-gray-200
            rounded-lg bg-white shadow-md p-5 m-2 hover:shadow-lg sm:w-2/3 md:w-1/2 lg:w-1/3`}>
                <div>
                    <h1 className="font-(family-name:--primary-font) text-4xl font-bold">How was the weather on <span className="italic">your </span>Day One?</h1>
                    
                    <div className='border-b-2 mt-5 mb-5'>
                        <div className='before:border-6 before:bg-black before:border-white before:rounded-2xl before:size-6 before:absolute before:-translate-y-1/2 before:-translate-x-3'></div>
                    </div>

                    <div>
                        <form className='grid grid-cols-1 text-center gap-3 place-items-center'>
                            <InputData label='Your Name' value={name} updateValue={setName}></InputData>
                            <InputData date={true} label="Birth Date" value={date} updateValue={setDate}></InputData>
                            <InputData label="Country you were born" value={country} updateValue={setCountry}></InputData>
                            <InputData label="City you were born" value={city} updateValue={setCity}></InputData>

                            <div className={`border-2 border-green-300 shadow-sm hover:shadow-md w-fit rounded-2xl p-3 mt-2
                                    bg-green-200 font-(family-name:--secondary-font) text-green-800 flex gap-3 justify-baseline
                                    ${!isFormValid || isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} items-center`}>

                                {isPending ? <AiOutlineLoading3Quarters className='animate-spin cursor-progress size-3'/> : <IoSend className='cursor-pointer size-3'/>}
                                <button type='button' className={`${!isFormValid || isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={handleSubmit} disabled={isPending || !isFormValid}>
                                    {isPending ? "Loading..." : "Submit!"}
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    )

}