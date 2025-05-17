
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero-section relative py-16 md:py-24 text-white"
        style={{
          backgroundImage: "url('/images/who are we.png')"
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Who we are?</h1>
          <p className="text-xl">About Palakkad</p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our History</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Palakkad District Bar Association was established in 1958 as a professional organization representing legal practitioners in the Palakkad district of Kerala. With a rich history spanning over six decades, our association has grown from a small group of dedicated advocates to a thriving community of legal professionals committed to upholding the principles of justice and the rule of law.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Throughout our history, we have played a significant role in legal reforms, community service, and professional development. Our members have contributed immensely to the legal framework of Kerala state and have been instrumental in protecting the rights of citizens through dedicated legal practice.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Palakkad District Bar Association is committed to serving the legal profession, the justice system, and the public by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed space-y-2">
              <li>Promoting the highest standards of professional ethics and integrity among legal practitioners</li>
              <li>Facilitating continuing legal education and professional development for our members</li>
              <li>Advocating for the independence of the judiciary and the legal profession</li>
              <li>Providing legal assistance to underprivileged sections of society</li>
              <li>Fostering collegiality and camaraderie among members of the legal fraternity</li>
              <li>Contributing to the development and reform of laws and legal procedures</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-12">Leadership</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The association is governed by an Executive Committee elected by its members. The committee consists of the President, Vice President, Secretary, Joint Secretary, Treasurer, and Executive Members. Each elected member serves a term of two years and works collaboratively to advance the objectives of the association.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-12">Membership</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Membership of the Palakkad District Bar Association is open to all advocates practicing in the courts within the jurisdiction of Palakkad district. To become a member, an advocate must be enrolled with the Bar Council of Kerala and must be actively practicing law in Palakkad.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our membership includes a diverse group of legal professionals specializing in various areas of law, including civil, criminal, constitutional, family, property, taxation, and corporate law. This diversity enables the association to address a wide range of legal issues and serve the needs of the community effectively.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-12">Activities and Initiatives</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Palakkad District Bar Association engages in various activities and initiatives, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed space-y-2">
              <li>Regular legal workshops and seminars</li>
              <li>Free legal aid camps for the public</li>
              <li>Annual law conferences and symposiums</li>
              <li>Publication of legal journals and newsletters</li>
              <li>Social welfare activities for members and their families</li>
              <li>Representation of members' interests before various governmental bodies</li>
              <li>Celebration of Law Day and other important legal occasions</li>
            </ul>
            
            <p className="text-gray-700 mt-10 leading-relaxed">
              Through these endeavors, the Palakkad District Bar Association continues to uphold its legacy of excellence in the legal profession and service to society. We are proud of our past achievements and remain committed to our mission of promoting justice, equality, and the rule of law in Palakkad district and beyond.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
