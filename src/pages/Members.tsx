
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import { Input } from "@/components/ui/input";

// Generate sample members data
const generateMembers = () => {
  const titles = ["Adv. Yeshwant Shenoy", "Adv. Aarav Kumar", "Adv. Priya Menon", "Adv. Rajesh Nair", "Adv. Sarika Iyer", 
                  "Adv. Mohan Krishnan", "Adv. Ananya Pillai", "Adv. Vivek Sharma", "Adv. Deepa Menon", "Adv. Suresh Nambiar",
                  "Adv. Lakshmi Nair", "Adv. Karthik Menon", "Adv. Divya Patel", "Adv. Arjun Krishna", "Adv. Meena Rajan"];
  
  const positions = ["Senior Advocate", "Advocate", "Junior Advocate"];
  
  const members = [];
  
  for (let i = 0; i < 50; i++) {
    const nameIndex = i % titles.length;
    const posIndex = i % positions.length;
    
    members.push({
      name: titles[nameIndex],
      position: positions[posIndex],
      id: `BRF${123400 + i}`
    });
  }
  
  return members;
};

const allMembers = generateMembers();

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 12;
  
  // Filter members based on search term
  const filteredMembers = allMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Pagination
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);
  
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-legal-accent py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Members 2024 - 2025</h1>
          
          <div className="max-w-xl mx-auto">
            <div className="flex gap-4 mt-6">
              <Input
                type="text"
                placeholder="Search for members here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Members Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentMembers.map((member) => (
              <MemberCard 
                key={member.id}
                name={member.name}
                position={member.position}
                id={member.id}
              />
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <nav className="flex items-center space-x-2">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-legal hover:bg-legal-accent'}`}
                >
                  &lt;
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-legal text-white' : 'text-legal hover:bg-legal-accent'}`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-legal hover:bg-legal-accent'}`}
                >
                  &gt;
                </button>
              </nav>
            </div>
          )}
          
          {/* No results message */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No members found matching your search.</h3>
              <p className="text-gray-500 mt-2">Please try a different search term.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Members;
