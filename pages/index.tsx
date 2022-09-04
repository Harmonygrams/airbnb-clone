// import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Banner from './components/Banner'
import SmallCard from './components/SmallCard'
import LargeCard from './components/LargeCard'
import MediumCard from './components/MediumCard'
import Footer from './components/Footer'
// const Home: NextPage = () => {
const Home = ({exploreData, cardsData}) =>{
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '> 
        <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'> Explore Nearby</h2>  
            {/*Pulling data from the server */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'> 
              {exploreData?.map(item =>(
                <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
              ))}
            </div>
        </section>
        <section> 
          <h2 className='text-4xl font-semibold py-8'> Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'> 
            {cardsData?.map(item => <MediumCard 
              key={item.img} 
              img={item.img} 
              title={item.title}
            />)}
          </div>
        </section>
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title = 'The Greatest Outdoors'
          description = 'Wishlists curated by Airbnb'
          buttonText = 'Get Inspired'
        />
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps(){
  try{
    const exploreData = await fetch('https://links.papareact.com/pyp');
    const result = await exploreData.json();
    const cardsDataRequest = await fetch('https://links.papareact.com/zp1');
    const cardsData = await cardsDataRequest.json();
    return ({props : {exploreData : result, cardsData : cardsData}});
  }
  catch(err){
    console.log('An error occurred while fetching data', err);
  }
}

export default Home
