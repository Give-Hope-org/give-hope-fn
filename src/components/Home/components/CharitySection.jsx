import React from "react";
import "./CharitySection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import charity2 from "../../../assets/charity2.jpg";
import charity3 from "../../../assets/charity3.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CharitySection() {
  const charities = [
    {
      name: "Kigali Genocide Memorial",
      description:
        "The Kigali Genocide Memorial's mission is to provide a dignified burial place for victims of the 1994 genocide in Rwanda and to educate visitors on the causes and consequences of genocide.",
      image: charity2,
    },
    {
      name: "Ghana Red Cross Society",
      description:
        "To provide humanitarian services to the most vulnerable in Ghana through mobilization of resources, skills, and knowledge.",
      image: charity2,
    },
    {
      name: "The Nigerian Red Cross Society",
      description:
        "To prevent and alleviate human suffering, protect life and health, and uphold human dignity especially during armed conflicts and other emergencies.",
      image: charity3,
    },
    {
      name: "The Nigerian Red Cross Society",
      description:
        "To prevent and alleviate human suffering, protect life and health, and uphold human dignity especially during armed conflicts and other emergencies.",
      image: charity3,
    },
    {
      name: "The Nigerian Red Cross Society",
      description:
        "To prevent and alleviate human suffering, protect life and health, and uphold human dignity especially during armed conflicts and other emergencies.",
      image: charity3,
    },
    {
      name: "The Nigerian Red Cross Society",
      description:
        "To prevent and alleviate human suffering, protect life and health, and uphold human dignity especially during armed conflicts and other emergencies.",
      image: charity3,
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="charity-container" id="charities">
      <h2>Top priority request.</h2>
      <p>This is an urgent and critical request that requires immediate attention and action. 
        It is of utmost importance and must be addressed promptly to meet the established deadlines 
        or resolve a pressing issue. </p>
      <Slider {...settings} className="bg-gray-100 w-11/12 mx-auto">
        {charities.map((charity, index) => (
          <div className="charity h-full" key={index}>
            <div className="charity-image">
              <Link to="/charity-profile">
                <img src={charity.image} alt={charity.name} />
              </Link>
            </div>
            <div className="charity-info">
              <h3>{charity.name}</h3>
              <p>{charity.description}</p>
              <Link to="donation-form" className="donate-button">
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CharitySection;