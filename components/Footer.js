const Footer = () =>{
    return(
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800 '> 
                <h5 className='font-bold'> ABOUT </h5>
                <p> How Airbnb Works</p>
                <p> Newsroom </p>
                <p> Investor </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800 '> 
                <h5 className='font-bold'> COMMUNITY </h5>
                <p> Accessibility</p>
                <p> This is not real site  </p>
                <p> Its a pretty awesome clone </p>
                <p> Referrals Accepted </p>
                <p> Harmony</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800 '> 
                <h5 className='font-bold'> HOST </h5>
                <p> Harmony Built This Website</p>
                <p> React</p>
                <p> Next Js </p>
                <p> Tailwind Css </p>
                <p> Javascript </p>
            </div>
            <div className='space-y-4 text-xs text-gray-800 '> 
                <h5 className='font-bold'> SUPPORT </h5>
                <p> Help Center </p>
                <p>Trust &amp; Safety </p>
                <p> Say Hi Youtube </p>
                <p> Easier Eggs </p>
                <p> For the win </p>
            </div>
        </div>
    )
}
export default Footer;