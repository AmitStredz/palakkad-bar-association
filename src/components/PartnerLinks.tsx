
import { Link } from 'react-router-dom';

interface PartnerLink {
  name: string;
  image: string;
  url: string;
}

const partnerLinks: PartnerLink[] = [
  {
    name: "High Court of Kerala",
    image: "/images/highcourt.png",
    url: "https://highcourtofkerala.nic.in/"
  },
  {
    name: "Supreme Court of India",
    image: "/images/supremecourt.png",
    url: "https://main.sci.gov.in/"
  },
  {
    name: "Bar Council of Kerala",
    image: "/images/barcouncil.png",
    url: "https://barcouncilofkerala.org/"
  },
  {
    name: "Ministry of Law & Justice",
    image: "/images/lawjust.png",
    url: "https://lawmin.gov.in/"
  }
];

const PartnerLinks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Related Links</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partnerLinks.map((partner) => (
            <a 
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 transition-all hover:transform hover:scale-105"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-legal-accent">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-center text-gray-700">{partner.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLinks;
