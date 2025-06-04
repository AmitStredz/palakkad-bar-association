import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import NewsCard from "@/components/NewsCard";
import PartnerLinks from "@/components/PartnerLinks";
import MediaLibrary from "@/components/MediaLibrary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import ExecutiveCard from "@/components/ExecutiveCard";

const executives = [
  { name: "Rupesh M.S", position: "President", id: "K/971/1999", phone1:"9447621322", phone2:"9074662660", email:"advocatemsrupesh@gmail.com " },
  { name: "Bejoy N.V", position: "Secretary", id: "K/1588/2000", phone1:"9495165202", phone2:"9847542002", email:"bejoyadv@gmail.com" },
  { name: "Krishnadas V", position: "Vice President", id: "K/655/2008", phone1:"9846488558", phone2:"9447977808", email:"vkrishnadasadv1234@gmail.com" },
  { name: "Rakhi N", position: "Lady Vise President", id: "K/38/99", phone1:"9747010826", phone2:"", email:"rakhin372@gmail.com " },
  { name: "Anjana A", position: "Joint Secretary", id: "K/1193/2010", phone1:"8848119185", phone2:"", email:"anjana.menon7@gmail.com" },
  { name: "Dileep PK", position: "Treasurer", id: "K/946/2008", phone1:"9895580587", phone2:"", email:"adv.pkdileep@gmail.com" },
];
const members = [
  { name: "Rahul K Mohammed", id: "K/527/2021", phone1:"9633636769",  email:"adv.rahulkmohammed@gmail.com " },
  { name: "Adithyan U", id: "K/549/2022", phone1:"8075952154",  email:"adithyanu10@gmail.com" },
  { name: "Manu Mohan", id: "K/801/2019", phone1:"8089181869",  email:"manumohantrs@gmail.com" },
  { name: "Surjith AV", id: "K/1292/18", phone1:"8907714345",  email:"surjithvenu@gmail.com" },
  { name: "Ranju RK", id: "K/249/2018", phone1:"8157873013",  email:"ranjurk09@gmail.com" },
  
];

// const news = [
//   {
//     title: "Child protection rights law",
//     description: "The Child Protection Rights Law aims to safeguard the rights, welfare, and well-being of children, ensuring they are free from all forms of abuse, exploitation, and neglect.",
//     date: "November 24, 2025",
//     imageUrl: "/images/child law.png",
//     link: "/news/child-protection-rights"
//   },
//   {
//     title: "New legal aid clinic opens",
//     description: "The association is proud to announce the opening of a new legal aid clinic to provide free legal assistance to underprivileged communities.",
//     date: "November 20, 2025",
//     imageUrl: "/images/pen.png",
//     link: "/news/legal-aid-clinic"
//   },
//   {
//     title: "Annual law conference 2025",
//     description: "Registration is now open for the Annual Law Conference 2025, featuring distinguished speakers from across the legal profession.",
//     date: "November 15, 2025",
//     imageUrl: "/images/talk.png",
//     link: "/news/annual-conference"
//   }
// ];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section relative py-20 md:py-32 text-white"
        style={{
          backgroundImage: "url('/images/main bg.png')",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Dedicated to Justice, Rights, and Legal Excellence
            </h1>
            <p className="text-lg mb-6">
              Justice is the cornerstone of a fair society. As legal
              professionals, we are dedicated to upholding fairness, serving
              legal needs, for courts, litigants, and the public.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-legal hover:bg-legal-secondary"
            >
              <Link to="/contact">Call us: +91 8089682807</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
            Executive Committee 2024 - 2025
          </h2>
          <div className="w-20 h-1 bg-legal mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {executives.map((executive, index) => (
              <ExecutiveCard
                key={index}
                name={executive.name}
                position={executive.position}
                id={executive.id}
                phone1={executive.phone1}
                phone2={executive.phone2}
                email={executive.email}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mt-10">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                email={member.email}
                enrl_number={member.id}
                imageUrl={!!member?.phone1}
                mobile_number={member?.phone1}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-legal text-legal hover:bg-legal hover:text-white"
            >
              <Link to="/committees">View All Members</Link>
            </Button>
          </div>
        </div>
      </section>
          

      {/* Members Directory Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Members Directory
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg">
                Find contact information for attorneys, paralegals, legal
                specialists, and support staff. Our comprehensive directory
                makes it easy to connect with legal professionals.
              </p>
              <Button asChild className="bg-legal hover:bg-legal-secondary">
                <Link to="/members">See member directory</Link>
              </Button>
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/adv.png"
                alt="Lawyer photo"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Library Section */}
      <section className="py-16 bg-white">
        <MediaLibrary />
      </section>

      {/* News & Events Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">News & Events</h2>
          <div className="w-20 h-1 bg-legal mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard 
                key={item.title}
                title={item.title}
                description={item.description}
                date={item.date}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Partner Links Section */}
      <PartnerLinks />

      <Footer />
    </div>
  );
};

export default Index;
