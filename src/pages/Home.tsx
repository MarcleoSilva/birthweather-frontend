import '../App.css'
import { Registration } from '../components/screens/Registration'

export default function Home(){
    return(
        <div style={{ backgroundImage: 'url(/sunnyday.gif)' }} 
        className="h-screen w-screen bg-cover bg-center flex justify-center items-center">
            <Registration></Registration>
        </div>
    )
}