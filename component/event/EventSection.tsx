"use client";
import React from "react";
import EventSlider from "../slider/EventSlider";
import { EventType } from "@/types";

type Props = {
  section: string;
  startIndex?: number;
  endIndex: number;
  eventData: EventType[];
};

const EventSection = ({ section, startIndex, endIndex, eventData }: Props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_40">
              <h5>Our Upcoming Events</h5>
              <h2>Educate & Elevate: Events That Inspire Learning</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 wow fadeInUp" >
            <div className="tf__single_event" style={{width:"100%"}}>
              <div className="tf__single_event_img">
                <img src="/images/OIP1.jpg" alt="Forex Seminar" className="img-fluid w-100" />
                <a className="event_category green" href="">Webinar</a>
              </div>
              <div className="tf__single_event_text">
                <ul>
                  <li><i className="far fa-map-marker-alt"></i> Online</li>
                  {/* <li><i className="far fa-clock"></i> 2024-05-24</li> */}
                </ul>
                <a className="title" href="/">Online Forex Webinar</a>
                <p>Join our online webinar to enhance your trading knowledge.</p>
                <div className="tf__single_event_footer">
                  <span>Online Forex Webinar</span><span>Free</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 wow fadeInUp" >
            <div className="tf__single_event" style={{width:"100%"}}>
              <div className="tf__single_event_img">
                <img src="/images/webinar.webp" alt="Forex Seminar" className="img-fluid w-100" />
                <a className="event_category green" href="/">Webinar</a>
              </div>
              <div className="tf__single_event_text">
                <ul>
                  <li><i className="far fa-map-marker-alt"></i> Online</li>
                  {/* <li><i className="far fa-clock"></i> 2024-05-25</li> */}
                </ul>
                <a className="title" href="/">Online Forex Webinar</a>
                <p>Join our online webinar to enhance your trading knowledge.</p>
                <div className="tf__single_event_footer">
                  <span>Online Forex Webinar</span><span>Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Forex Trading Event 1 */}
          <div className="col-xl-4 wow fadeInUp">
            <div className="tf__single_event" style={{width:"100%"}}>
              <div className="tf__single_event_img">
                <img src="/images/OIP.jpg" alt="Forex Trading Workshop" className="img-fluid w-100" />
                <a className="event_category blue" href="/">Workshop</a>
              </div>
              <div className="tf__single_event_text">
                <ul>
                  <li><i className="far fa-map-marker-alt"></i> Islamabad, Pakistan</li>
                  {/* <li><i className="far fa-clock"></i> 2024-06-15</li> */}
                </ul>
                <a className="title" href="/">Forex Trading Workshop</a>
                <p>Enhance your forex trading skills with hands-on training from experts.</p>
                <div className="tf__single_event_footer">
                  <span>Forex Trading Workshop</span><span>Rs 1000.00</span>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </section>
  );
};

export default EventSection;
