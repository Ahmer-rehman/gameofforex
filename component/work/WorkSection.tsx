import React from "react";
import WorkSlider from "../slider/WorkSlider";
import { WorkType } from "@/types";
interface Props {
  workData: WorkType[];
}
const WorkSection = () => {
  return (
    <section className="tf__work pt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_35 md_margin">
              <h5>OUR Working now</h5>
              <h2>Mastering Skills for Professional Success</h2>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xl-4 wow fadeInUp" key="1">
            <div className="tf__work_single color-1">
              <div className="tf__work_single_img">
                <img src="/images/analysis.jpg" alt="Market Analysis" className="img-fluid w-100" />
              </div>
              <div className="tf__work_single_text">
                <h3>Market Analysis</h3>
                <p>Analyze market trends to make informed trading decisions.</p>
                <a href="#">
                  <i className="fas fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 wow fadeInUp" key="2">
            <div className="tf__work_single color-2">
              <div className="tf__work_single_img">
                <img src="/images/strategy-development.jpg" alt="Strategy Development" className="img-fluid w-100" />
              </div>
              <div className="tf__work_single_text">
                <h3>Strategy Development</h3>
                <p>Develop effective trading strategies to maximize profits.</p>
                <a href="#">
                  <i className="fas fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
