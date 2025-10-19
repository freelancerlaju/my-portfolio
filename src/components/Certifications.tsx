import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const certifications = [
  {
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Nov 2023",
    link: "https://www.linkedin.com/learning/certificates/4b0455567c3cfda25e8ef1896c3639f05112af66ace4292ed1004466ef830c94",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQH9Bl60mLooEA/feedshare-shrink_1280/feedshare-shrink_1280/0/1693230478401?e=2147483647&v=beta&t=D95AvRlyCt7mPdJFFCCtaIbkvxz_EcmG0CAReYysB_E",
  },
  {
    title: "Python 3 Ultimate Guide",
    issuer: "Udemy",
    date: "Oct 2023",
    link: "https://www.udemy.com/certificate/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457.jpg?v=1697713760000",
  },
  {
    title: "PW Backend Development Course",
    issuer: "Physics Wallah",
    date: "Mar 2024",
    link: "https://pwskills.com/learn/certificate/1e3f9e1e-9108-4685-bfa0-6325856f3823/",
    image:
      "https://i.ibb.co/gMvXCmVQ/1e3f9e1e-9108-4685-bfa0-6325856f3823-1.png",
  },
  {
    title: "JAVA Course - Mastering the Fundamentals",
    issuer: "Scaler",
    date: "Mar 2024",
    link: "https://moonshot.scaler.com/s/image/li/8T4eLNJyeF",
    image: "https://moonshot.scaler.com/s/image/li/8T4eLNJyeF?scope=body",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="certifications"
      className="py-10 md:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-8">
        <SectionTitle>
          <AnimatedText
            text="Certifications"
            textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
            underlineClassName="text-red-500"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={2.0}
          />
        </SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
