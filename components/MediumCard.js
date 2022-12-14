import Image from 'next/image'
const MediumCard = ({img, title}) =>{
    return(
        <div className='cursor-pointer m-2 mt-5 space-x-5 hover:scale-105 transition transform duration-300 ease-out'>
            <div className='relative h-80 w-80'> 
                <Image 
                    src={img}
                    layout='fill'
                    className='rounded-xl'
                />
            </div> 
            <div> 
                <h3 className='text-2xl mt-3'> {title}</h3>
            </div>
        </div>
    )
}
export default MediumCard; 
