import { FaLocationDot } from "react-icons/fa6";

export default function Maps({data}:{data:string}){
    return(
        <div className="flex justify-baseline items-center gap-3 flex-col border-gray-200 border-2 rounded-2xl
                                p-3 shadow-md">
            <div className='flex justify-baseline items-center gap-3'>
            <p className='text-2xl font-(family-name:--secondary-font)'>Location</p><FaLocationDot size={23}/>
            </div>
            <iframe src={data} width={150} height={150}>
            </iframe>
        </div>
    )
}