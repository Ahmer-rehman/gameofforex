import { CategoryType } from "@/types";
import React from "react";

interface Props {
  categoryData: CategoryType[];
}

const categories: CategoryType[] = [
  {
    _id:" 1",
    title: 'Spot Forex Trading',
    desc: 'Involves the immediate exchange of currencies at the current exchange rate.',
    color: 'color-spot',
    icon: 'icon-spot',
  },
  {
    _id:" 2",
    title: 'Forward Forex Trading',
    desc: 'A contract to buy or sell a currency at a predetermined price at a future date.',
    color: 'color-forward',
    icon: 'icon-forward',
  },
  {
    _id:" 3",
    title: 'Futures Forex Trading',
    desc: 'Standardized contracts traded on an exchange to buy or sell a currency at a set date in the future.',
    color: 'color-futures',
    icon: 'icon-futures',
  },
  {
    _id: "4",
    title: 'Options Forex Trading',
    desc: 'Gives the holder the right, but not the obligation, to buy or sell a currency at a set price on or before a specified date.',
    color: 'color-options',
    icon: 'icon-options',
  },
  {
    _id: "5",
    title: 'Swap Forex Trading',
    desc: 'Involves simultaneous borrowing and lending of two different currencies between two parties.',
    color: 'color-swap',
    icon: 'icon-swap',
  },
  {
    _id: "6",
    title: 'Currency ETFs (Exchange-Traded Funds)',
    desc: 'Funds that track the performance of a specific currency or a basket of currencies.',
    color: 'color-etfs',
    icon: 'icon-etfs',
  },
];

const CategorySection = ({ categoryData }: Props) => {
  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>OUR COURSE CATEGORIES</h5>
              <h2>Categories for New Traders</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {categoryData.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item._id}>
              <div className={`tf__single_category ${item.color}`}>
                <div className="tf__single_category_icon">
                  <i className={item.icon}></i>
                </div>
                <div className="tf__single_category_text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
