import React from 'react';
function Status() {
    return ( 
        <>
            <div className='container mb-5 p-5'>
                <div className='row mt-5'>
                    <div className='col-6 p-5'>
                        <h1 className='fs-2 '>Trust with confidence</h1>
                        <h2 className='fs-4 mt-5'>Customer-first always</h2>
                        <p className='text-muted mt-3 mb-5' style={{width : "80%"}} >That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                        <h2 className='fs-4 mt-4' >No spam or gimmicks</h2>
                        <p className='text-muted mt-3 mb-5' style={{width : "80%"}} > No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                        <h2 className='fs-4 mt-4' >The Zerodha universe</h2>
                        <p className='text-muted mt-3 mb-5' style={{width : "80%"}} >Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                        <h2 className='fs-4 mt-4 ' >Do better with money</h2>
                        <p className='text-muted mt-3' style={{width : "80%"}}  > With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        
                    </div>
                    <div className='col-6 p-2'>
                        <img className="" style={{width: "100%"}} src='/assets/ecosystem.png'/>
                        <div className='text-center mt-5'>
                            <a href='' className='mx-5' style={{textDecoration : "none"}}> Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                            <a href='' style={{textDecoration : "none"}}> try Kite  Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Status;