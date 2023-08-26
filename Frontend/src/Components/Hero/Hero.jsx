import React from 'react'
import { HomeContainer, RectangularBlock, Shop, Eyeing, Shoppee, New, HomeDecor, BlueBox, TopBrand, TwoBigImages, ImageDiv, Costumers, NeedHelpBuying  } from './HeroCSS'
import ImageSlider from '../ImageSlider/ImageSlider'
import { SliderData } from '../ImageSlider/SliderData';
import kids from '../../Images/kids-4.jpeg'
import kid from '../../Images/kids-1.jpg'
import decor from '../../Images/decorcorner.jpg'
import chair from '../../Images/chairs-4.jpeg'
import decor2 from '../../Images/chairs-1.jpeg'
import Uniquesofa from '../../Images/uniquesofa.jpg'
import decor1 from '../../Images/decor-2.jpg'
import A from '../../Images/a.jpeg'
import B from '../../Images/b.jpeg'
import C from '../../Images/c.jpg'
import D from '../../Images/d.jpeg'
import E from '../../Images/e.jpeg'
import F from '../../Images/f.jpeg'
import {Navigate, useNavigate} from 'react-router-dom'






const Hero = () => {
    const Navigate = useNavigate()

  return (
    <>
        <HomeContainer>
            <div className="belowNavbar">
                <ImageSlider slides={SliderData}/>
                <img src="https://img.freepik.com/free-vector/furniture-icons-set_1284-4237.jpg" alt={"SideImage"} className="sideImage"/>
            </div>
            <RectangularBlock><h1 className='h1'>Shop By Room</h1></RectangularBlock>
            <Shop>
                <div onClick={()=>Navigate('/Sofas') }>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1_2x_31032022.jpg" alt={"Living"} />
                    <div  className="title">Sofas</div>
                </div>
                <div onClick={()=>Navigate('/StudyOffice') }>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2_2x_31032022.jpg" alt={"WFH"} />
                    <div  className="title">Study & Office</div>
                </div>
                <div onClick={()=>Navigate('/Beds') }>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3_2x_31032022.jpg" alt={"Bedroom"} />
                    <div  className="title">Bedroom</div>
                </div>
                <div onClick={()=>Navigate('/KidsRoom') } >
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4_2x_31032022.jpg" alt={"KidsRoom"} />
                    <div  className="title">Kids Room</div>
                </div>
            </Shop>
            <h1>What's Everyone Eyeing</h1>
            <Eyeing>
                <div>
                    <img onClick={()=>Navigate('/Decor') } src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_31032022.jpg" alt={"Wardrobes"} className="sideOne"/>
                </div>
                <div onClick={()=>Navigate('/Sofas') } >
                    <img src={decor2} alt={"WallArt"} className="sideTwo"/>
                </div>
                <div className="quadra">
                    <div onClick={()=>Navigate('/StudyOffice') }>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_31032022.jpg" alt={"ShoeRack"} className="quadraImage"/> 
                    </div>
                    <div onClick={()=>Navigate('/Beds') }>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_31032022.jpg" alt={"KingSizeBed"} className="quadraImage"/> 
                    </div>
                    <div onClick={()=>Navigate('/Sofas') }>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_31032022.jpg" alt={"SeaterSofa"} className="quadraImage"/>
                    </div>
                    <div onClick={()=>Navigate('/KidsRoom') } >
                        <img src={kids} alt={"HangingLights"} className="quadraImage"/>
                    </div>
                </div>
            </Eyeing>
            <h1>Your Pocket-Friendly Shoppe</h1>
            <Shoppee>
                <div onClick={()=>Navigate('/Beds') }>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_31032022.jpg" alt={"QueenSizeBeds"} />
                    <div className="upperText">Queen Size Beds</div>
                </div>
                <div onClick={()=>Navigate('StudyOffice') }>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_31032022.jpg" alt={"StudyTables"} />
                    <div className="upperText">Study Tables</div>
                </div>
                <div onClick={()=>Navigate('StudyOffice') } >
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_31032022.jpg" alt={"PortableTables"} />
                    <div className="upperText">Portable Tables</div>
                </div>
                <div onClick={()=>Navigate('Chairs') }>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_4_2x_31032022.jpg" alt={"OfficeChairs"} />
                    <div className="upperText">Office Chairs</div>
                </div>
            </Shoppee>
            <h1>Ready For The New?</h1>
            <New>
                <div onClick={()=>Navigate('Sofas') }>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_1_2x_31032022.jpg" alt={"Aelber"} />
                    <div className="upperText">Aelber Collection</div>
                    <div className="lowerText">So Plush</div>
                </div>
                <div onClick={()=>Navigate('StudyOffice') }> 
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_31032022.jpg" alt={"Alabaster"} />
                    <div className="upperText">Alabaster Collection</div>
                    <div className="lowerText">Winsome Whites</div>
                </div>
                <div onClick={()=>Navigate('KidsRoom') }>
                    <img src={kid} alt={"DisneyCollection"} />
                    <div className="upperText">Kids Collection</div>
                    <div className="lowerText">The Happiest Collection</div>
                </div>
            </New>
            <h1>Home Décor You Can't Ignore</h1>
            <HomeDecor>
                <div onClick={()=>Navigate('Beds') }>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_1_2x_31032022.jpg" alt={"BedSheets"} />
                    <div className="upperText">Beds</div>
                    <div className="lowerText">Fresh & Breezy</div>
                </div>
                <div onClick={()=>Navigate('Decor') }>
                    <img src={decor} alt={"WallArt"} />
                    <div className="upperText">Decor for Corner</div>
                    <div className="lowerText">Oh So Glam</div>
                </div>
                <div onClick={()=>Navigate('Decor') }>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_3_2x_31032022.jpg" alt={"Figurines"} />
                    <div className="upperText">Figurines</div>
                    <div className="lowerText">Morden</div>
                </div>
                <div onClick={()=>Navigate('Chairs') }>
                    <img src={chair} alt={"CushionCovers"} />
                    <div className="upperText">Royal Chair</div>
                    <div className="lowerText">Quick Makeovers</div>
                </div>
            </HomeDecor>
            <BlueBox>
                <div>
                    <h1>We’ve Got Your Style</h1><br/>
                    <p>Your home is a reflection of you. Nail your aesthetic with products our stylists love and recommend</p><br/>
                    <div onClick={()=>Navigate('Decor') }  style={{color:"#ff7035"}}>View all Styles</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_1_2x_31032022.jpg" alt={"Modern"} />
                    <div className="upperText">Modern</div>
                    <div className="lowerText">Form Meets Function</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_2_2x_31032022.jpg" alt={"Traditional"} />
                    <div className="upperText">Traditional</div>
                    <div className="lowerText">Old World Charm</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_3_2x_31032022.jpg" alt={"Industrial"} />
                    <div className="upperText">Industrial</div>
                    <div className="lowerText">Prefect Imperfections</div>
                </div>
            </BlueBox>
            <h1>Top Products To Choose From</h1>
            <TopBrand>
                <img onClick={()=>Navigate('Beds') } src={A} alt={"Industrial"} />
                <img onClick={()=>Navigate('Chairs') } src={B} alt={"Industrial"} />
                <img onClick={()=>Navigate('Decor') } src={C} alt={"Industrial"} />
                <img onClick={()=>Navigate('KidsRoom') } src={D} alt={"Industrial"} />
                <img onClick={()=>Navigate('StudyOffice') } src={E} alt={"Industrial"} />
                <img onClick={()=>Navigate('Sofas') } src={F} alt={"Industrial"} />


            </TopBrand>
            <TwoBigImages>
                <img onClick={()=>Navigate('Sofas') } src={Uniquesofa} alt={"ShopNowOne"}/>
                <img onClick={()=>Navigate('Decor') } src={decor1} alt={"ShopNowTwo"}/>
            </TwoBigImages>
            <ImageDiv>
                <img src="https://ii1.pepperfry.com/images/hp_more_from_store_bg.jpg" alt={"SofaImage"}/>
                <div className="textDiv">
                    <h1>More From The Store</h1><br/>
                    <div className="lists">
                    <div>
                            <h3 onClick={()=>Navigate('Home') }>Home</h3>
                            <ul>
                                <li>Sofas</li>
                                <li>Chairs</li>
                                <li>Beds</li>
                                <li>Tables</li>
                                <li>Kids</li>
                                <li>Home Office</li>
                                <li>Sofa Chairs</li>
                                <li>Decor Units</li>
                            </ul><br />
                            </div>
                            <div>
                            <h3 onClick={()=>Navigate('Sofas') }>Sofas</h3>
                            <ul>
                                <li>Traditional Sofas</li>
                                <li>Camelback Sofa</li>
                                <li>Lawson Sofa</li>
                                <li>Tuxedo Sofa</li>
                                <li>Family Sofas</li>
                                <li>Sectional Sofa</li>
                                <li>Modular Sofa</li>
                                <li>Mid-Century Modern Sofa</li>

                            </ul>
                            <h3 onClick={()=>Navigate('Decor') }>Décor</h3>
                            <ul>
                                <li>Crystals</li>
                                <li>Pinboards</li>
                                <li>Baskets</li>
                                <li>Glass Sculptures</li>
                                <li>Timber Decor</li>
                                <li>Canisters</li>
                                <li>Dried Flowers</li>
                                <li>Side Tables</li>
                            </ul><br />
                            </div>
                            <div>
                            <h3 onClick={()=>Navigate('Beds') }>Beds</h3>
                                <ul>
                                    <li>Daybed</li>
                                    <li>Futon</li>
                                    <li>Waterbed</li>
                                    <li>Air Bed</li>
                                    <li>Bookcase Bed</li>
                                    <li>Twin Bed</li>
                                    <li>Full Bed</li>
                                    <li>Four-Poster Bed</li>
                                </ul>
                            <h3 onClick={()=>Navigate('Chairs') }>Chairs</h3>
                                <ul>
                                    <li>Adirondack Chair</li>
                                    <li>Barcelona Chair</li>
                                    <li>Cantilever Chair</li>
                                    <li>Bentwood Chair</li>
                                    <li>Chesterfield Chair</li>
                                    <li>Club Chair</li>
                                    <li>Eames Lounge Chair</li>
                                    <li>Ghost Chair</li>
                                </ul><br />
                                </div>
                                <div>
                            <h3 onClick={()=>Navigate('KidsRoom') }>Kids-Room</h3>
                                <ul>
                                   <li>Kids Sofa</li> 
                                    <li>Kids Writing Table</li>
                                    <li>Baby Chairs</li>
                                    <li>Kids Table</li>
                                    <li>Painting</li>
                                    <li>Wall Art</li>
                                    <li>Wall Hook</li>
                                    <li>Kids Bed</li>
                                </ul>
                            <h3 onClick={()=>Navigate('StudyOffice') }>Study and Office</h3>
                            <ul>
                                <li>Office Table</li>
                                <li>Seater Sofa</li>
                                <li>Work Station</li>
                                <li>Fabric Chair</li>
                                <li>Wall Painting</li>
                                <li>Study Lamp</li>
                                <li>Wall Hanging</li>
                                <li>Office Desk</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </ImageDiv>
            <Costumers>
                <h1>Happy Costumers, Happy Us</h1>
                <div className="customerReviews">
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg" alt="" />
                        <p>Bought these two grey puffy stools from E-Furniture. Found them to be surprisingly strong! Blends perfectly...</p>
                        <div className="customerName">Suman Senapatia</div>
                        <div className="location">Visakhapatnam</div>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_8.jpg" alt="" />
                        <p>I purchased Candy Study Chair in Pink Colour by Alex Daisy from E-Furniture looks awesome and My daughter...</p>
                        <div className="customerName">Satya Madhana</div>
                        <div className="location">Secunderabad</div>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg" alt="" />
                        <p>Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got it...</p>
                        <div className="customerName">Baba Kattubadi</div>
                        <div className="location">Hyderabad</div>
                    </div>
                </div>
            </Costumers>
            <NeedHelpBuying>
                  </NeedHelpBuying>
        </HomeContainer>
    </>
  )
}

export default Hero