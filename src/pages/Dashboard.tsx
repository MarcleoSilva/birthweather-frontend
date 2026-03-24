import { useLocation } from 'react-router-dom'
import '../App.css'
import type { WeatherStats } from '../components/data/WeatherStats';
import Maps from '../components/ui/Maps';
import Divisor from '../components/ui/Divisor';
import Resume from '../components/ui/Resume';
import { BoxPlot } from '../components/ui/Plots';

export default function Dashboard(){
    const location = useLocation();
    const data = location.state as WeatherStats;

    console.log(data)

    const isRaining = getBackgroundImage({ isRaining: data.isRaining })


    return(
        <div style={{
                backgroundImage: isRaining,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'repeat', 
            }}
            className="h-screen w-screen bg-cover bg-center flex justify-center items-center ">
                <div className='border grid grid-cols-1 gap-3 text-center border-gray-200
            rounded-lg bg-white shadow-md p-5 m-2 hover:shadow-lg sm:w-2/3 md:w-1/2 lg:w-1/3'>
                    <h1 className="font-(family-name:--primary-font) text-4xl font-bold"><span className="italic">Your</span> day was:</h1>
                    <Divisor/>
                    <div className='grid grid-cols-2 gap-2'>
                            <Resume cloud={data.isCloudy} temp={data.isTemperature} rain={data.isRaining} avgDegree={data.averageTemperature.toPrecision(3)}/>
                            <Maps data={data.mapsURL}></Maps>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='border grid grid-cols-1 gap-3 text-center border-gray-200
            rounded-lg bg-white shadow-md p-5 m-2 hover:shadow-lg w-fit'>
                            <BoxPlot varArray={data.Temperature} name="Temperature" ></BoxPlot>
                            <h1 className='font-(family-name:--secondary-font)'>Average: {data.averageTemperature.toPrecision(3)}°C</h1>
                        </div>
                        
                        
                    </div>
                </div>
        </div>
    )
}

function getBackgroundImage({isRaining}:{isRaining: string}){
    if (isRaining == "No rain")
        return "url(/sunnyday.gif)"
    if (isRaining == "Heavy rain")
        return "url(https://i.pinimg.com/originals/e0/ea/8a/e0ea8a2b4888e8f730098bdd023ca379.gif)"
    else {
        return "url(https://i.pinimg.com/originals/c1/a9/3a/c1a93a1d0de0059a3119b8b1a55ce582.gif)"
    }
}