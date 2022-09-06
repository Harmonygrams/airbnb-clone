import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
const Search = () =>{
    const filtersStyle = 'px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'
    return(
        <div>
            <Header />
            <main> 
                <section> 
                    <p className='text-x5'> 300+ Stays for 5 number of guests </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars </h1> 
                    <div className='hidden lg:inline-flex'> 
                        <p className={filtersStyle}>Cancellation Flexibility </p> 
                        <p className={filtersStyle}> Price </p>
                        <p className={filtersStyle}> Rooms and Beds </p>
                        <p className={filtersStyle}> More filters </p>
                        <p className=''> Type of place </p>
                    </div>
                </section>
            </main>
            <Footer /> 
        </div>
    )
}
export default Search; 