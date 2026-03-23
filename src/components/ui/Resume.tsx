import { IoCloud, IoDocumentTextOutline, IoRainy, IoThermometerSharp } from "react-icons/io5";

interface InputProps {
    cloud: string,
    temp: string,
    rain: string,
    avgDegree: string
}

export default function Resume({cloud, temp, rain, avgDegree}: InputProps){
    return(
        <div className="flex justify-baseline items-center gap-3 flex-col border-gray-200 border-2 rounded-2xl
                                p-3 shadow-md overflow-clip">
            <div className='flex justify-baseline items-center gap-3'>
                <h1 className="font-(family-name:--secondary-font) sm:text-2xl text-1xl ">Resume</h1>
                <IoDocumentTextOutline size={26}></IoDocumentTextOutline>
            </div>
            <div className="grid grid-cols-1 gap-y-8 font-(family-name:--secondary-font) col-auto pr-2 text-1xl pt-2">
                <div className="flex gap-2">
                    <IoCloud size={20}/>
                    <p>{cloud}</p>
                </div>
                <div className="flex gap-2">
                    <IoThermometerSharp size={20}/>
                    <p>{temp} ({avgDegree}°C)</p>
                </div>
                <div className="flex gap-2">
                    <IoRainy size={20}/>
                    <p>{rain}</p>
                </div>

            </div>

        </div>
    )
}
