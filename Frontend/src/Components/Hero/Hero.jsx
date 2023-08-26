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
import Footer from '../Footer/Footer';






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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY3s7UklWjdHpIfhWL6QrDYVypfpyRIuq0g&usqp=CAU" alt={"Living"} />
                    <div  className="title">Sofas</div>
                </div>
                <div onClick={()=>Navigate('/StudyOffice') }>
                    <img src="https://images.dwell.com/photos-6133431940611203072/7008620965063864320-medium/i-wanted-to-create-a-really-timeless-base-throughout-the-house-while-still-incorporating-some-punches-of-color-in-areas-like-the-bathrooms-and-in-some-of-the-furnishings.jpg" alt={"WFH"} />
                    <div  className="title">Study & Office</div>
                </div>
                <div onClick={()=>Navigate('/Beds') }>
                    <img src="https://i.ytimg.com/vi/r5-30Ps4d6o/maxresdefault.jpg" alt={"Bedroom"} />
                    <div  className="title">Bedroom</div>
                </div>
                <div onClick={()=>Navigate('/KidsRoom') } >
                    <img src="https://www.ashiainteriors.com/images/gallery/kidsroom/study/4.png" alt={"KidsRoom"} />
                    <div  className="title">Kids Room</div>
                </div>
            </Shop>
            <h1>What's Everyone Eyeing</h1>
            <Eyeing>
                <div>
                    <img onClick={()=>Navigate('/Decor') } src="https://woodpeckerz.in/cdn/shop/products/1414392289.jpg?v=1607272263" alt={"Wardrobes"} className="sideOne"/>
                </div>
                <div>
                    <img onClick={()=>Navigate('/sofas') } src="https://wallmantra.com/cdn/shop/products/doe-buck-lounge-chair-shell-motif-luxury-green-velvet-lounge-chair-33469897900198_500x.jpg?v=1652342158" alt={"sofas"} className="sideOne"/>
                </div>
               
                <div className="quadra">
                    <div onClick={()=>Navigate('/StudyOffice') }>
                        <img src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/2007756-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzQyNTB8aW1hZ2UvanBlZ3xhR1UyTDJnMU5TOHhORGcyT0RreU5UWXhNakEyTWk4eU1EQTNOelUyTFRBeExtcHdaMTh4TWpBd1YzZ3hNakF3U0F8ZmIxOWM3NTczODJmZWU4NzEwODJkYmY1YjI3MGMxMzlkYWNkM2E3YmViYzE5OWJkOTdmNTJmYTJhYmZhYmQxMg" alt={"ShoeRack"} className="quadraImage"/> 
                    </div>
                    <div onClick={()=>Navigate('/Beds') }>
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/bed-mattress/m/o/w/normal-top-queen-5-60-75-starline-dual-plus-soft-hard-5-inch-original-imaggnjuhrwq2jxz.jpeg?q=90" alt={"KingSizeBed"} className="quadraImage"/> 
                    </div>
                    <div onClick={()=>Navigate('/Sofas') }>
                        <img src="https://secure.img1-fg.wfcdn.com/im/70190930/resize-h310-w310%5Ecompr-r85/1271/127129788/Seats+3+Celestia+78.8%2522+Flared+Arm+Sofa.jpg" alt={"SeaterSofa"} className="quadraImage"/>
                    </div>
                    <div onClick={()=>Navigate('/KidsRoom') } >
                        <img src={kids} alt={"HangingLights"} className="quadraImage"/>
                    </div>
                </div>
            </Eyeing>
            <h1>Your Pocket-Friendly Shoppe</h1>
            <Shoppee>
                <div onClick={()=>Navigate('/Beds') }>
                    <img src="https://w0.peakpx.com/wallpaper/175/474/HD-wallpaper-stylish-modern-bedroom-interior-modern-design-white-brown-bedroom-large-bed.jpg" alt={"QueenSizeBeds"} />
                    <div className="upperText">Queen Size Beds</div>
                </div>
                <div onClick={()=>Navigate('StudyOffice') }>
                    <img src="https://www.jiomart.com/images/product/original/rvtwmxhj3h/woodbuzz-marvel-study-table-ocean-green-frosty-white-product-images-orvtwmxhj3h-p599612174-0-202303200906.jpg?im=Resize=(360,360)" alt={"StudyTables"} />
                    <div className="upperText">Study Tables</div>
                </div>
                <div onClick={()=>Navigate('StudyOffice') } >
                    <img src="https://woodbuzz.in/cdn/shop/products/walnut1_8aafa2ed-9ee7-4011-b149-49a2d20d6576_300x300.jpg?v=1674297127" alt={"PortableTables"} />
                    <div className="upperText">Portable Tables</div>
                </div>
                <div onClick={()=>Navigate('Chairs') }>
                    <img src="https://media.istockphoto.com/id/1415964450/photo/gray-office-fabric-armchair-on-wheels-isolated-on-white-background-side-view.webp?b=1&s=170667a&w=0&k=20&c=sn29WMfjcQ9Zu7RfkFVWLUgiA0axGtzRh8_6OHF6UE0=" alt={"OfficeChairs"} />
                    <div className="upperText">Office Chairs</div>
                </div>
            </Shoppee>
            <h1>Ready For The New?</h1>
            <New>
                <div onClick={()=>Navigate('Sofas') }>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/12/EM/DW/VA/2733977/two-seater-sofa.jpg" alt={"Aelber"} />
                    <div className="upperText">Aelber Collection</div>
                    <div className="lowerText">So Plush</div>
                </div>
                <div onClick={()=>Navigate('StudyOffice') }> 
                    <img src="https://lushinteriors.co/cdn/shop/products/IMG_4423_600x.jpg?v=1692110138" alt={"Alabaster"} />
                    <div className="upperText">Alabaster Collection</div>
                    <div className="lowerText">Winsome Whites</div>
                </div>
                <div onClick={()=>Navigate('KidsRoom') }>
                <img src="https://i.pinimg.com/originals/71/b1/37/71b137f56174e6717fef11aba920927a.jpg" alt={"Alabaster"} />
                    <div className="upperText">Kids Collection</div>
                    <div className="lowerText">The Happiest Collection</div>
                </div>
            </New>
            <h1>Home Décor You Can't Ignore</h1>
            <HomeDecor>
                <div onClick={()=>Navigate('Beds') }>
                    <img src="https://img1.exportersindia.com/product_images/bc-full/2021/3/6047400/double-bed-bedsheet-1616498805-5764796.jpeg" alt={"BedSheets"} />
                    <div className="upperText">Beds</div>
                    <div className="lowerText">Fresh & Breezy</div>
                </div>
                <div onClick={()=>Navigate('Decor') }>
                    <img src={decor} alt={"WallArt"} />
                    <div className="upperText">Decor for Corner</div>
                    <div className="lowerText">Oh So Glam</div>
                </div>
                <div onClick={()=>Navigate('Decor') }>
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/81yvXYnuu3L._AC_UL750_SR750,750_.jpg" alt={"Figurines"} />
                    <div className="upperText">Figurines</div>
                    <div className="lowerText">Morden</div>
                </div>
                <div onClick={()=>Navigate('Chairs') }>
                <img src="https://img.freepik.com/premium-photo/old-vintage-luxury-chair-white-golden-frame_800563-3277.jpg" alt={"Figurines"} />
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
                    <img src="https://www.modfurn.com/wp-content/uploads/2021/10/Blue_01_HD-copy-min-e1633687480858.jpg" alt={"Modern"} />
                    <div className="upperText">Modern</div>
                    <div className="lowerText">Form Meets Function</div>
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/8a/bb/3e/8abb3e51c3077ce6acec94fa6bde4a8b.jpg" alt={"Traditional"} />
                    <div className="upperText">Traditional</div>
                    <div className="lowerText">Old World Charm</div>
                </div>
                <div>
                    <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/y/4/c/cycle-metal-wall-art-wall-decoration-wall-hanging-1-armwa276-original-imaggfyxwtsdhyfr.jpeg?q=90" alt={"Industrial"} />
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
                    <div onClick={()=>Navigate('Chairs') }>
                        <img src="https://m.media-amazon.com/images/I/81xobNQM-3L._AC_UF894,1000_QL80_DpWeblab_.jpg" alt="" />
                        <p>Bought these two blue puffy stools from E-Furniture. Found them to be surprisingly strong! Blends perfectly...</p>
                        <div className="customerName">Pruthviraj</div>
                        <div className="location">jaipur</div>
                    </div>
                    <div onClick={()=>Navigate('Chairs') }>
                        <img src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/A2NJPK6E0EOF1S/366bde2a-1fca-4410-8ccd-5471cd25f865._CR0,0,500,500_PT0_SX300__.jpg" alt="" />
                        <p>I purchased Candy Study Chair in Pink Colour by Alex Daisy from E-Furniture looks awesome and My daughter...</p>
                        <div className="customerName">Bhagyashri</div>
                        <div className="location">Nashik</div>
                    </div>
                    <div onClick={()=>Navigate('Chairs') }>
                        <img src="https://ii2.pepperfry.com/media/catalog/product/m/a/800x880/maestro-nylon-ergonomic-chair-in-black-colour-maestro-nylon-ergonomic-chair-in-black-colour-dadqtw.jpg" alt="" />
                        <p>Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got it...</p>
                        <div className="customerName">Shivani</div>
                        <div className="location">Ajmer</div>
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