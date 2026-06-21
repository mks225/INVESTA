import React from 'react';

function Universe(imageURL) {
    return (
        <div className='container text-center '>
            <div className='row mb-5'>
                <h1 className='fs-1 mt-5 mb-4 text-muted'>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p> 
            

                <div className='col-4 mt-4'>
                    <img src='/assets/zerodhaFundhouse.png' style={{width : "52%"}} />
                    <p className='text-muted mt-3' style={{fontSize : "smaller"}}>Our asset management venture<br/>
                    that is creating simple and transparent index funds to help you <br/> save for your goals.</p>
                </div>

                <div className='col-4 mt-4'>
                    <img classname='p-5' src='/assets/sensibullLogo.svg' style={{width : "74%"}} />
                    <p className='text-muted mt-3' style={{fontSize : "smaller"}}>Options trading platform that lets you<br/> create strategies, analyze positions, and examine <br/> data points like open interest, FIl/DII, and more..</p>
                </div>
                <div className='col-4 mt-4'>
                    <img src='/assets/tijori.svg' style={{width : "36%"}}/>
                    <p className='text-muted mt-3' style={{fontSize : "smaller"}}>Investment research platform <br/>that offers detailed insights on stocks,<br/>sectors, supply chains, and more.</p>
                </div>
            </div>



            <div className='row mb-5'>
                <div className='col-4 mt-4 mb-5'>
                    <img src='/assets/streakLogo.png' style={{width : "42%"}}/>
                    <p className='text-muted mt-3' style={{fontSize : "smaller"}}>Systematic trading platform <br/>
                    that allows you to create and backtest <br/> strategies without coding.</p>
                </div>

                <div className='col-4 mt-4 mb-5'>
                    <img src='/assets/smallcaselogo.png ' style={{width : "52%"}}/>
                    <p className='text-muted mt-3' style={{fontSize : "smaller"}}>Thematic investing platform <br/> that helps you invest in diversified <br/> baskets of stocks on ETFs.</p>
                </div>

                <div className='col-4 mt-4 mb-5'>
                    <img src='/assets/dittologo.png' style={{width : "35%"}}/>
                    <p className='text-muted mt-3' style={{fontSize : "smaller"}}>Personalized advice on life <br/> and health insurance. No spam <br/> and no mis-selling.</p>
                </div>
            </div>

            <button className=" p-2 btn btn-primary fs-5 mb-5 mt-3" style={{width : "18%" , margin : "0 auto"}} > SignUp for free </button>
            <div className='my-5'></div>

        </div>
        
    );
}

export default Universe;