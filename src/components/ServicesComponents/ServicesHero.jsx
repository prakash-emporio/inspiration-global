import serviceHero from "/serviceHero.png";
import { useLocation } from "react-router-dom";
import "./ServiceHero.css";
import { useState, useEffect } from "react";

export default function ServicesHero() {
  const location = useLocation();
  const [heroMainText, setHeroMainText] = useState('');
  const [heroCardText, setHeroCardText] = useState('');

  const routeTextMap = {
    '/services/product-engineering': {
      heroMainText: 'Product Engineering',
      heroCardText: 'We provide comprehensive product and platform engineering services that address the full technology stack'
    },
    '/services/custom-development': {
      heroMainText: 'Custom Development',
      heroCardText: 'Architecting Your Future with Custom Application Development: Dream, Build, Scale'
    },
    '/services/cloud-services': {
      heroMainText: 'Cloud Services',
      heroCardText: 'We work towards advancing the cloud Journey towards enhanced resilience'
    },
    '/services/data-analytics': {
      heroMainText: 'Data and Analytics',
      heroCardText: 'The advent of data, analytics, and AI has unlocked a world of uncharted opportunities'
    },
    '/services/artificial-intelligence': {
      heroMainText: 'Artificial Intelligence',
      heroCardText: 'Unlocking your Potential with artificial intelligence and data is a must-have'
    },
    '/services/cio-advisory': {
      heroMainText: 'CIO Advisory',
      heroCardText: 'Technology is pervasive, but Value is elusive in todays CIO roles'
    },
    '/services/pmo': {
      heroMainText: 'PMO Services',
      heroCardText: 'Comprehensive Project Management Office Services for today and tomorrow'
    },
    '/services/security': {
      heroMainText: 'Security',
      heroCardText: 'Our extensive cybersecurity expertise, coupled with our profound industry knowledge, empowers us to innovate next-generation cybersecurity solutions'
    },
  };

  useEffect(() => {
    // Update text content based on the route
    const textContent = routeTextMap[location.pathname];
    if (textContent) {
      setHeroMainText(textContent.heroMainText);
      setHeroCardText(textContent.heroCardText);
    }
  }, [location.pathname]);

  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid service-hero-img" src={serviceHero} alt="" />
        <div className="position-absolute service-top">
          <div className="container mx-lg-5 px-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="text-white shared-hero-main-text">
                  {heroMainText}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col">
              <div className="position-absolute service-hero-card">
                <div className="service-card-color">
                  <h1 className="service-hero-card-text">
                    {heroCardText}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
