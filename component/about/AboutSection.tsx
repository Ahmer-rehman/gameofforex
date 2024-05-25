"use client";
import { Radio, radioClasses } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/about_top_img.jpg"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Trade with Confidence</h4>
                  <p>
                    We can provide you with reliable, expert insights to enhance
                    your trading skills.
                  </p>
                </div>
                <a href="#" className="common_btn">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>OUR About Us</h5>
                <h2>
                  Discover Our Story: Empowering Traders, Fostering Success.
                </h2>
              </div>
              <p>
                Expertly tailored strategies, management & support services for
                traders. Navigate the forex market with confidence and
                precision.
              </p>
              <ul>
                <li>In-depth market analysis and insights.</li>
                <li>Comprehensive risk management strategies.</li>
                <li>Cutting-edge trading tools and technology.</li>
                <li>Personalized trading plans and mentorship.</li>
                <li>Continuous education and market updates.</li>
              </ul>

              <Link href="/about" className="common_btn">
                about more
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                
                src="images/about_img.png"
                alt="about"
                style={{ borderRadius: '100px' }}
                className="img-fluid w-100"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
