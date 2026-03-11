import '../App.css'
import { Modal } from '../components/modal/modal'

export default function Home(){
    return(
        <div style={{ backgroundImage: 'url(/sunnyday.gif)' }} 
        className="h-screen w-screen bg-cover bg-center flex justify-center items-center">
            <Modal></Modal>
        </div>
    )
}