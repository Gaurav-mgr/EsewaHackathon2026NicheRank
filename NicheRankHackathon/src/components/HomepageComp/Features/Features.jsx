import "./Features.css"
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Features(){
  return(
    <aside>
      <div className="features">
        <div className="sidebar">
          <ul className="feature-list">
            <div className="items">
              <li>Topup & recharge</li>
              <span><MdOutlineArrowForwardIos /></span>
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
          <p>hello</p>
        </div>
      </div>

      
    </aside>
  )
}