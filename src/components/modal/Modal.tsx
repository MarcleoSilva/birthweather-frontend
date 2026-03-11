import '../../App.css'

export function Modal(){

    return(
        <div className="border grid grid-cols-1 gap-3 text-center border-gray-200
        rounded-lg bg-white shadow-md p-5 m-2 hover:shadow-lg w-fit">
            <div>
                <h1 className="font-(family-name:--primary-font) text-4xl font-bold">How was the weather on <span className="italic">your </span>Day One?</h1>
                
                <div className='border-b-2 mt-5 mb-5'>
                    <div className='before:border-6 before:bg-black before:border-white before:rounded-2xl before:size-6 before:absolute before:-translate-y-1/2 before:-translate-x-3'></div>
                </div>

                
            </div>
                

        </div>
    )

}