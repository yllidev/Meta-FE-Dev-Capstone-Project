import React from "react"
import small_logo from "../images/littlelemon_sm.png"
import tiktok from "../images/tiktok.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import snapchat from "../images/snapchat.png"
import twitter from "../images/twitter.png"
import whatsapp from "../images/whatsapp.png"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>We are a family owned Mexican restaurant, focused on traditional family recipes from southern Mexico.</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Make a Reservation</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Gotham Street, New York, NY</li>
                <li>Phone: <br/> +212 555 6666 <br/> (call, text or whatsapp)</li>
                <li>Email: <br/> info@littlelemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>    
            <ul>
                <li><a href="/"><img class="social" src={facebook} alt="" height={50}/></a>
                <a href="/"><img class="social" src={instagram} alt="" height={50}/></a>
                <a href="/"><img class="social" src={whatsapp} alt="" height={50}/></a></li>
            
                <li><a href="/"><img class="social" src={snapchat} alt="" height={50}/></a>
                <a href="/"><img class="social" src={tiktok} alt="" height={50}/></a>
                <a href="/"><img class="social" src={twitter} alt="" height={50}/></a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;