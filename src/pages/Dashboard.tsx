import { useLocation } from 'react-router-dom'
import '../App.css'
import type { WeatherStats } from '../components/data/WeatherStats';

export default function Dashboard(){
    const location = useLocation();
    const data = location.state as WeatherStats;

    console.log(data)

    const isRaining = getBackgroundImage({ isRaining: data.isRaining })


    return(
        <div style={{ backgroundImage: isRaining }} 
            className="h-screen w-screen bg-cover bg-center flex justify-center items-center">
        </div>
    )
}

function getBackgroundImage({isRaining}:{isRaining: string}){
    if (isRaining == "No rain")
        return "url(/sunnyday.gif)"
    else {
        return "url(https://cdnb.artstation.com/p/assets/images/images/023/743/143/original/valentin-hume-rainymoodresized.gif?1580214826)"
    }
}