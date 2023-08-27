import { Navigate,useNavigate } from 'react-router-dom';
import {Costumers}  from './HeroCSS'
import Footer from '../Footer/Footer';
const  Customers= () => {
    const Navigate = useNavigate(); 
    return (
        <>
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
                        <img src="https://5.imimg.com/data5/PO/TT/MY-7591753/leather-executive-office-chair-500x500.jpg" alt="" />
                        <p>Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got it...</p>
                        <div className="customerName">Shivani</div>
                        <div className="location">Ajmer</div>
                    </div>
                </div>
            </Costumers>
            </>
    );
}

export default Customers;