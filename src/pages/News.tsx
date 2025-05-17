
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Generate sample news data
const generateNews = () => {
  const titles = [
    "Child protection rights law",
    "New legal aid clinic opens",
    "Annual law conference 2025",
    "Supreme Court judgment on privacy",
    "Webinar on corporate law updates",
    "Pro bono initiative launched",
    "Bar council elections announced",
    "Legal workshop for law students",
    "Amendments to civil procedure code",
    "High court ruling on property rights",
    "Lawyers' day celebration",
    "Digital evidence seminar"
  ];
  
  const descriptions = [
    "The Child Protection Rights Law aims to safeguard the rights, welfare, and well-being of children, ensuring they are free from all forms of abuse, exploitation, and neglect.",
    "The association is proud to announce the opening of a new legal aid clinic to provide free legal assistance to underprivileged communities.",
    "Registration is now open for the Annual Law Conference 2025, featuring distinguished speakers from across the legal profession.",
    "A landmark judgment by the Supreme Court has reinforced the fundamental right to privacy for all citizens.",
    "Join us for an insightful webinar on recent updates and changes in corporate law that affect businesses.",
    "Our new pro bono initiative aims to increase access to justice for marginalized communities.",
    "The Bar Council of Kerala has announced elections for the next term. Members are encouraged to participate.",
    "A special workshop series for law students will cover practical aspects of legal practice.",
    "Recent amendments to the civil procedure code will streamline court proceedings.",
    "A significant ruling by the High Court clarifies property rights in disputed inheritance cases.",
    "Join us in celebrating Lawyers' Day with a special program and felicitation ceremony.",
    "Learn about the latest developments in digital evidence collection and presentation in court."
  ];
  
  const news = [];
  
  for (let i = 0; i < titles.length; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i * 2);
    
    news.push({
      title: titles[i],
      description: descriptions[i],
      date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      imageUrl: `/images/child law.png`,
      link: `/news/${titles[i].toLowerCase().replace(/\s+/g, '-')}`
    });
  }
  
  return news;
};

const allNews = generateNews();

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter news based on search term
  const filteredNews = allNews.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    news.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-legal-accent py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">News & Events</h1>
          
          <div className="max-w-xl mx-auto">
            <div className="flex gap-4 mt-6">
              <Input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <NewsCard 
                key={news.title}
                title={news.title}
                description={news.description}
                date={news.date}
                imageUrl={news.imageUrl}
                link={news.link}
              />
            ))}
          </div>
          
          {/* No results message */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No news found matching your search.</h3>
              <p className="text-gray-500 mt-2">Please try a different search term.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News;
