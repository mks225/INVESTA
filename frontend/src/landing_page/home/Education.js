import React from 'react';
function Education() {
    return (  
        <div className='container p-4'>
            <div className='row ' >
                <div className='col-6  p-5'>
                    <img src="/assets/education.svg" alt="Largest Broker" />
                </div>
                <div className='col-6 p-5' >
                    <h1 className='mb-4 fs-2'> Free and open market education</h1>
                    <div>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='' style={{textDecoration: "none"}}> Varsity <i className="fa fa-long-arrow-right mb-5" aria-hidden="true"></i></a>
                    </div>    
                    <div>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' style={{textDecoration: "none"}}> TradingQ&A <i className="fa fa-long-arrow-right mb-5" aria-hidden="true"></i></a>
                    </div>        
                </div>
            </div>
        </div>
    );
}
export default Education;