import React from 'react';
function Pricing() {
    return ( 
        <div className='container my-5'>
            <div className='row p-5'>
                <div className='col-5 p-5' >
                    <h1 className='mb-3 fs-2'> Unbeatable pricing </h1>
                    <p className='mb-4 mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none"}}> See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                <div className='col-7'>
                    <div className='row  p-5'>
                        <div className="col-4" style={{display : 'flex'}}>
                            <img style={{ width: "60%" }} src="/assets/pricing-eq-0.svg" alt="Free account opening" />
                            <p className='mt-5 text-muted' style={{fontSize : "10px"}}>Free account opening</p>
                        </div>

                        <div className="col-4  " style={{display : 'flex'}}>
                            <img style={{ width: "60%" }} src="/assets/pricing-eq-0.svg" alt="Free account opening" />
                            <p className='mt-5 text-muted' style={{fontSize : "9px"}}>Free equity delivery and direct mutual funds</p>
                        </div>

                        <div className="col-4" style={{display : 'flex'}}>
                            <img style={{width : "60%"}} src='/assets/other-trades-20.svg' alt="Intraday andF&O" />
                            <p className='mt-5 text-muted' style={{fontSize : "10px" }}>Intraday and F&Og</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Pricing;