
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import NewsCard from "@/components/NewsCard";
import PartnerLinks from "@/components/PartnerLinks";
import MediaLibrary from "@/components/MediaLibrary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const members = [
  { name: "Adv. Yeshwant Shenoy", position: "President", id: "BRF123411" },
  { name: "Adv. Aarav Kumar", position: "Vice President", id: "BRF123412" },
  { name: "Adv. Priya Menon", position: "Secretary", id: "BRF123413" },
  { name: "Adv. Rajesh Nair", position: "Treasurer", id: "BRF123414" },
  { name: "Adv. Sarika Iyer", position: "Executive Member", id: "BRF123415" },
  { name: "Adv. Mohan Krishnan", position: "Executive Member", id: "BRF123416" },
];

const news = [
  {
    title: "Child protection rights law",
    description: "The Child Protection Rights Law aims to safeguard the rights, welfare, and well-being of children, ensuring they are free from all forms of abuse, exploitation, and neglect.",
    date: "November 24, 2025",
    imageUrl: "/images/child law.png",
    link: "/news/child-protection-rights"
  },
  {
    title: "New legal aid clinic opens",
    description: "The association is proud to announce the opening of a new legal aid clinic to provide free legal assistance to underprivileged communities.",
    date: "November 20, 2025",
    imageUrl: "/images/pen.png",
    link: "/news/legal-aid-clinic"
  },
  {
    title: "Annual law conference 2025",
    description: "Registration is now open for the Annual Law Conference 2025, featuring distinguished speakers from across the legal profession.",
    date: "November 15, 2025",
    imageUrl: "/images/talk.png",
    link: "/news/annual-conference"
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero-section relative py-20 md:py-32 text-white"
        style={{
          backgroundImage: "url('/images/main bg.png')"
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Dedicated to Justice, Rights, and Legal Excellence</h1>
            <p className="text-lg mb-6">Justice is the cornerstone of a fair society. As legal professionals, we are dedicated to upholding fairness, serving legal needs, for courts, litigants, and the public.</p>
            <Button asChild size="lg" className="bg-legal hover:bg-legal-secondary">
              <Link to="/contact">Call us: +91 8089682807</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Executive Committee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">Executive Committee 2024 - 2025</h2>
          <div className="w-20 h-1 bg-legal mx-auto mb-10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {members.map((member) => (
              <MemberCard 
                key={member.id}
                name={member.name}
                position={member.position}
                id={member.id}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Members Directory</h2>
              <p className="text-gray-600 mb-6 max-w-lg">
                Find contact information for attorneys, paralegals, legal specialists, and support staff. 
                Our comprehensive directory makes it easy to connect with legal professionals.
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
