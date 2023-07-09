import React from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder, XYZ Organization",
      message:
        "GiveHope has transformed the way we raise funds for our projects. With their platform, we've been able to reach more donors and create a lasting impact in our community. Highly recommended!",
      imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Volunteer, ABC Foundation",
      message:
        "I've personally witnessed the difference GiveHope has made in the lives of those in need. The platform is easy to use, and the support we receive from the team is exceptional. Grateful to be !",
      imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Founder, XYZ Organization",
      message:
        "GiveHope has transformed the way we raise funds for our projects. With their platform, we've been able to reach more donors and create a lasting impact in our community. Highly recommended!",
      imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
        id: 4,
        name: "Jane Smith",
        role: "Volunteer, ABC Foundation",
        message:
            "I've personally witnessed the difference GiveHope has made in the lives of those in need. The platform is easy to use, and the support we receive from the team is exceptional. Grateful to !",
        imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
        id: 5,
        name: "John Doe",
        role: "Founder, XYZ Organization",
        message:
            "GiveHope has transformed the way we raise funds for our projects. With their platform, we've been able to reach more donors and create a lasting impact in our community. Highly recommended!",
        imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
        id: 6,
        name: "Jane Smith",
        role: "Volunteer, ABC Foundation",
        message:
            "I've personally witnessed the difference GiveHope has made in the lives of those in need. The platform is easy to use, and the support we receive from the team is exceptional. Grateful to be !",
        imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  // Configure the settings for the carousel
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "50px",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-10 ">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Slider {...carouselSettings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 flex">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;