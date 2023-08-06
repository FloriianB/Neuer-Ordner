import React from 'react';
import Iphone from "../assets/images/iphone-14.jpg";

function InfoSection(){
    return(
        <div className="info-section wrapper">
            <div className="info-section content">
              

                <div className="container-inf ">
                
                    <div className='obj-inf'>
                        <div> <image src="" alt="" /></div>
                        <h1 className='sub-title1'> BME280</h1>
                        {/* <span className='divider'>____________</span> */}
                        <p className='desc'>
                            
                        </p>
                        <div className='link-box'>
                          <a className='links' href="">erfahre mehr</a>
                        </div>
                        
                    </div>

                    <div className='obj-inf'>
                        <div> <image src="" alt="" />Octopus</div>
                        <h1 className='sub-title'> example</h1>
                        <p className='desc'>

                        </p>
                        <a className='links' href="">erfahre mehr</a>
                    </div>

                    <div className='obj-inf'>
                        <div> <image src="" alt="" /></div>
                        <h1 className='sub-title'> BME280</h1>
                        <p className='desc'>
                                                
                    Der BME280 ist ein Umweltsensor, der von Bosch Sensortec entwickelt wurde. 
                    Er kombiniert die Messung von Temperatur, Luftfeuchtigkeit und Luftdruck in einem einzigen Sensorchip.
                    Der BME280 ist in der Lage, genaue Messungen dieser Parameter durchzuführen 
                    nd wird häufig in Anwendungen wie Wetterstationen, 
                    Industrieautomatisierung, Luftqualitätsüberwachung und IoT-Geräten (Internet of Things) eingesetzt.
                        </p>
                        <a className='links' href="">erfahre mehr</a>
                    </div>

                    <div className='obj-inf'>
                        <div> <image src="" alt="" /></div>
                        <h1 className='sub-title'> </h1>
                
                        <p className='desc'>
                        Der BME680 ist ein Umweltsensor, der von Bosch Sensortec 
                        entwickelt wurde. Im Vergleich zum BME280, 
                        den wir zuvor erwähnt haben, 
                        misst der BME680 nicht nur Temperatur, 
                        Luftfeuchtigkeit und Luftdruck, 
                        sondern verfügt auch über einen zusätzlichen Gassensor
                         zur Erfassung von 
                         flüchtigen organischen Verbindungen (VOC)

                        </p>
                        <a className='links' href="">erfahre mehr</a>
                    </div>

                    <div className='obj-inf'>
                        <div> <image src="" alt="" /></div>
                        <h1 className='sub-title'> Sparkfun RGB und Gestensensor</h1>
                        <p className='desc'>
                           Mit dem SparkFun RGB/Gesture Sensore APDS-9060 lassen sich sowohl durch die Handgestenerkennung 
                           die Fluggeschwindigkeit- und Flugrichtung detektieren. Für die Flugerkennung werden Infrarot-LED's verwendet.
                           Der Sensor sendet Infrarotlicht aus und erkennt die reflektierenden Infrarotsignale, um in diesem Fall Flugeigenschaften zu erfassen.
                           Der APDS-9960 verfügt auch über einen Näherungssensor, 
                           der die Annäherung eines Objekts oder einer Hand erkennt, 
                           ohne die spezifische Gestenbewegung zu analysieren. Dies ermöglicht
                            die Erkennung der bloßen Anwesenheit eines Objekts in der Nähe des Sensors.</p>
                        <a className='links' href="">Learn More</a>
                    </div>

                    <div className='obj-inf'>
                        <div> <image src="" alt="" /></div>
                        <h1 className='sub-title'> H7XL</h1>
                        <p className='desc'>
                            Der H7XL Gewichtssensor kommt bei Vandalismus und Ernte zum Einsatz.
                            So lässt sich anhand des Gewichts mitunter bestimmen ob der Honig schon 
                            Ernte reif ist.
                        </p>
                        <a className='links' href="">erfahre mehr</a>
                    </div>

                
                



                  

                    </div>
                    </div>

                   

                </div>
        
    );
}

export default InfoSection;