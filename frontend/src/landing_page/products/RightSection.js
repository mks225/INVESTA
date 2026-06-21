import React from 'react';

function RightSection( { imageURL , ProductName ,productDiscription , learnmore } ) {
    return (
        <div className='container '>
            <div className='row p-5'>
                <div className='col-6 p-5' style={{marginTop : "80px"}}>
                    <div className='p-3'>
                        <h2 className='mt-5' >{ProductName}</h2>
                        <p style={{ width : "90%" }} className=''>{productDiscription}</p>
                        <a href={learnmore} style={{ textDecoration : "none" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>

                </div>

                <div className='col-6 p-5'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;