import React from 'react';
 import AI from '../assets/images/green-ai.png'
 import Sensor from '../assets/images/green-sensor.png'


function Overview(){
    return (
        
        <div className='Sensors-section wrapper flex items-center'>
         
            <div className='S-container' flex items-stretch>

                <div className='S-inner-container' >

                    <div className='main2'>
                        <img className="img1" src={AI} alt="ki logo" />
                        <h2 className='title'leading-relaxed>Machinelles <br/>Lernen</h2>
                        <p className='text'leading-relaxed>a near description of the machine learning algoritms</p>

                        <ul className='links'>
                            <li>
                                <a className='link'>learn more</a>
                            </li>
                        </ul>

                    </div>

                        <div className='main2'>

                        <img className="img1" src={Sensor} alt=" logo" />
                            <h2 className='title' leading-relaxed>Sensoren</h2>
                            <p className='text'leading-relaxed>a list of Sensors</p>

                            <ul className='links'>
                                <li>
                                    <a href="http://localhost:5173/InfoSection2/" class="menu__link" rel="internal" className='link '>learn more</a>
                                </li>
                            </ul>

                        </div>
             



                   </div>
                   
            </div>               
    
        </div>


           
   

    )
        }

export default Overview;