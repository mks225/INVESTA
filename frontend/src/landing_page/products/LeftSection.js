import React from 'react';

function leftSection({ imageURL , ProductName ,productDiscription , trydemo , learnmore , googleplay , appstore}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL} />
                </div>
                <div className='col-6 p-5' >
                    <h2>{ProductName}</h2>
                    <p style={{ width : "90%" }} className=''>{productDiscription}</p>
                    <div className='mt-3'>
                        <a href={trydemo} style={{textDecoration : "none"}}> Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        <a href={learnmore}  style={{marginLeft : "100px" ,textDecoration : "none"}} >  Learn More   </a>
                    </div>
                    <div className='mt-4' > 
                        <a href={googleplay} ><img src='/assets/googlePlayBadge.svg' /></a>
                        <a href={appstore} style={{marginLeft : "50px"}} ><img src='/assets/appstoreBadge.svg'/> </a>
                    </div>

                   
                </div>
            </div>

        </div>
    );
}

export default leftSection;