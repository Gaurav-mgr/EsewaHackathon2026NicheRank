import "./Features.css"
import { useState, useEffect } from "react";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import image1 from "../../../assets/carousal/banner1.webp";
import image2 from "../../../assets/carousal/banner2.webp";

export default function Features(){

  const [current, setCurrent] = useState(0);
  const slides = [image1, image2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return(
    <aside>
      <div className="features">
        <div className="sidebar">
          <ul className="feature-list">
            <div className="items">
              <li>Topup & recharge</li>
              <span className=""><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>Electricity & Water</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>TV Payment</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>Bus Ticket/Tours and Travels</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>Education Payment</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>DOFE/Insurance Payment</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>Financial Services</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>

            <div className="items">
              <li>Movies & Entertainment</li>
              <span><MdOutlineArrowForwardIos /></span>
            </div>
          </ul>
        </div>

        <div className="slideshow">
          <img
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s ease" }}
          />
        </div>
      </div>

      
    </aside>
  )
}