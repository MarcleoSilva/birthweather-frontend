import { useState } from 'react';
import '../../App.css'


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}
const InputData = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label className='font-bold font-(family-name:--secondary-font) pt-2'>{label}</label>
            <input className='w-1/2 border border-gray-100 shadow-sm rounded-4xl 
            text-center' value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )}


export function Registration(){
    const [name, setName] = useState("");
    const [date, setDate] = useState("YYYY-MM-DD");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    

    return(
        <div className="border grid grid-cols-1 gap-3 text-center border-gray-200
        rounded-lg bg-white shadow-md p-5 m-2 hover:shadow-lg w-fit">
            <div>
                <h1 className="font-(family-name:--primary-font) text-4xl font-bold">How was the weather on <span className="italic">your </span>Day One?</h1>
                
                <div className='border-b-2 mt-5 mb-5'>
                    <div className='before:border-6 before:bg-black before:border-white before:rounded-2xl before:size-6 before:absolute before:-translate-y-1/2 before:-translate-x-3'></div>
                </div>

                <div>
                    <form className='grid grid-cols-1 text-center gap-3 place-items-center'>
                        <InputData label='Your Name' value={name} updateValue={setName}></InputData>
                        <InputData label="Birth Date" value={date} updateValue={setDate}></InputData>
                        <InputData label="City you were born" value={city} updateValue={setCity}></InputData>
                        <InputData label="Country you were born" value={country} updateValue={setCountry}></InputData>
                    </form>
                </div>

                
            </div>
                

        </div>
    )

}