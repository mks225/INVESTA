import React from 'react';
function Hero() {
    return ( 

        <div className='container mb-5'>
            <div className='row text-center' >
                <img src="/assets/homeHero.png" alt="Zerodha Home Hero" className='mb-5'/>
                <div className='text-center'>
                <h1 >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=" p-2 btn btn-primary fs-5 mb-5" style={{width : "20%" , margin : "0 auto"}} > SignUp for free </button>
            </div>    
            </div>
        </div>
     );
}

export default Hero;