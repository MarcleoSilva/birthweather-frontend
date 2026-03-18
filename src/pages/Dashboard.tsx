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
    if (isRaining == "Heavy rain")
        return "url(https://i.pinimg.com/originals/e0/ea/8a/e0ea8a2b4888e8f730098bdd023ca379.gif)"
    else {
        return "url(https://i.pinimg.com/originals/c1/a9/3a/c1a93a1d0de0059a3119b8b1a55ce582.gif)"
    }
}