
import AboutSection from '@/component/about/AboutSection';
import ActivitySection from '@/component/activity/ActivitySection';
import BannerSection from '@/component/banner/BannerSection';
import BlogSection from '@/component/blog/BlogSection';
import CategorySection from '@/component/category/CategorySection';
import EventSection from '@/component/event/EventSection';
import FaqSection from '@/component/faq/FaqSection';
import FooterSection from '@/component/footer/FooterSection';
import VideoModal from '@/component/modal/VideoModal';
import NavbarSection from '@/component/navbar/NavbarSection';
import TestimonialSection from '@/component/testimonial/TestimonialSection';
import ScrollToTopButton from '@/component/utils/ScrollToTopButton';
import VideoSection from '@/component/video/VideoSection';
import WorkSection from '@/component/work/WorkSection';
// import { getActivity, getBlog, getCategory, getEvent, getFaq, getTestimonial, getWork } from '@/sanity/sanity.query';
// import { ActivityType, BlogType, CategoryType, EventType, FaqType, TestimonialType, WorkType } from '@/types';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "game of forex Home Page 1",
  description: "Developed by Ahmer Rahman",
}
export default async function Home() {
  const faqData = [
    {
      _id: "1",
      color: "color-1",
      question: "What is Forex trading?",
      answer: "Forex trading is the buying and selling of currencies on the foreign exchange market."
    },
    {
      _id: "2",
      color: "color-2",
      question: "How do I start trading Forex?",
      answer: "To start trading Forex, you need to open a trading account with a Forex broker, deposit funds, and start trading currencies."
    }
  ];
  
  const blogData = [
    {
      _id: "1",
      imgSrc: { alt: "Forex Strategies", image: "/images/top.webp" },
      category: "Education",
      color: "color-1",
      date: "2024-05-20",
      title: "Top Forex Trading Strategies",
      longTitle: "Learn About the Top Forex Trading Strategies for 2024",
      slug: "top-forex-trading-strategies",
      desc: "Discover the most effective trading strategies to improve your Forex trading skills.",
      author: "John Doe"
    },
    {
      _id: "2",
      imgSrc: { alt: "Market Analysis", image: "/images/analysis.jpg" },
      category: "Market Analysis",
      color: "color-2",
      date: "2024-05-18",
      title: "Weekly Market Analysis",
      longTitle: "In-Depth Analysis of the Forex Market for the Week",
      slug: "weekly-market-analysis",
      desc: "Get insights into the market movements and trends for the week.",
      author: "Jane Smith"
    }
  ];
  
  const categoryData= [
    {
      _id: "1",
      icon: "analysis.jpg",
      desc: "Learn the basics of Forex trading.",
      title: "Beginner",
      color: "blue"
    },
    {
      _id: "2",
      icon: "icon-class-2",
      desc: "Advanced strategies for experienced traders.",
      title: "Advanced",
      color: "Green"
    }
  ];
  
  const eventData= [
    {
      _id: "0",
      imgSrc: { alt: "Forex Seminar", image: "/images/seminar.webp" },
      category: "Seminar",
      location: "New York",
      time: "2024-06-15",
      title: "Forex Trading Seminar",
      longTitle: "Join Us for an In-Depth Forex Trading Seminar",
      slug: "forex-trading-seminar",
      desc: "Learn from the experts at our upcoming seminar in New York.",
      organizer: "Forex Academy",
      price: 100,
      color: "blue"
    },
    {
      _id: "1",
      imgSrc: { alt: "Forex Seminar", image: "/images/webinar.webp" },
      category: "Webinar",
      location: "Online",
      time: "2024-05-25",
      title: "Online Forex Webinar",
      longTitle: "Participate in Our Online Forex Trading Webinar",
      slug: "online-forex-webinar",
      desc: "Join our online webinar to enhance your trading knowledge.",
      organizer: "Forex Experts",
      price: 50,
      color: "green"
    },
    {
      _id: "0",
      imgSrc: { alt: "Forex Seminar", image: "/images/seminar.webp" },
      category: "Seminar",
      location: "New York",
      time: "2024-06-15",
      title: "Forex Trading Seminar",
      longTitle: "Join Us for an In-Depth Forex Trading Seminar",
      slug: "forex-trading-seminar",
      desc: "Learn from the experts at our upcoming seminar in New York.",
      organizer: "Forex Academy",
      price: 100,
      color: "blue"
    },
    {
      _id: "1",
      imgSrc: { alt: "Forex Seminar", image: "/images/webinar.webp" },
      category: "Webinar",
      location: "Online",
      time: "2024-05-35",
      title: "Online Forex Webinar",
      longTitle: "Participate in Our Online Forex Trading Webinar",
      slug: "online-forex-webinar",
      desc: "Join our online webinar to enhance your trading knowledge.",
      organizer: "Forex Experts",
      price: 50,
      color: "green"
    }
  ];
  
  const workData = [
    {
      _id: "1",
      imgSrc: { alt: "Market Analysis", image: "/images/analysis.jpg" },
      task: "Market Analysis",
      color: "color-1",
      desc: "Analyze market trends to make informed trading decisions."
    },
    {
      _id: "2",
      imgSrc: { alt: "Strategy Development", image: "/images/strategy-development.jpg" },
      task: "Strategy Development",
      color: "color-2",
      desc: "Develop effective trading strategies to maximize profits."
    }
  ];
  
  const testimonialData= [
    {
      _id: "1",
      imgSrc: { alt: "Client 1", image: "/images/images.jpg" },
      desc: "This platform has transformed my trading skills. Highly recommended!",
      name: "Muhammad Ali",
      designation: "Trader"
    },
    {
      _id: "2",
      imgSrc: { alt: "Client 2", image: "/images/ali.jpg" },
      desc: "Excellent resources and support for traders of all levels.",
      name: "Ali raza",
      designation: "Investor"
    }
  ];
  const activityData = [
    {
      _id: "1",
      iClassName: "activity-icon-1",
      title: "Live Trading",
      color: "orange"
    },
    {
      _id: "2",
      iClassName: "activity-icon-2",
      title: "Webinars",
      color: "red"
    },
    {
      _id: "3",
      iClassName: "activity-icon-3",
      title: "Workshops",
      color: "blue"
    },
    {
      _id: "4",
      iClassName: "activity-icon-4",
      title: "Market Analysis",
      color: "green"
    },
  ];
  

  return (
    <>
      <NavbarSection style="" logo="images/logo.png" />
      <BannerSection />
      {categoryData && <CategorySection categoryData={categoryData}/>}
      <AboutSection />
      {eventData && <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} eventData={eventData}/>}
      {faqData && <FaqSection img="images/faq_img.jpg" faqData={faqData}/>}
      {workData && <WorkSection workData={workData}/>}
      {testimonialData && <TestimonialSection testimonialData={testimonialData}/>}
      {activityData &&<ActivitySection activityData={activityData}/>}
      <VideoSection />
      {blogData && <BlogSection blogData={blogData}/>}
      <FooterSection />
      <VideoModal />
      <ScrollToTopButton style="" />
    </>
  );
}
