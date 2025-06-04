import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import { Input } from "@/components/ui/input";
import Papa from "papaparse";

interface Member {
  first_name: string;
  last_name: string;
  off_add: string;
  res_addr: string;
  mobile_number: string;
  landline_number: string;
  email_id: string;
  enrl_number: string;
  blood_grp: string;
  photo: string;
}

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 12;
  const maxPageNumbers = 5; // Maximum number of page numbers to show

  // Filter members based on search term
  const filteredMembers = members?.filter(
    (member) =>
      member.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.enrl_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfMaxPages = Math.floor(maxPageNumbers / 2);

    if (totalPages <= maxPageNumbers) {
      // Show all pages if total pages is less than maxPageNumbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Calculate start and end of page numbers
      let startPage = Math.max(2, currentPage - halfMaxPages);
      let endPage = Math.min(totalPages - 1, currentPage + halfMaxPages);

      // Adjust if we're near the start
      if (currentPage <= halfMaxPages) {
        endPage = maxPageNumbers - 1;
      }
      // Adjust if we're near the end
      if (currentPage > totalPages - halfMaxPages) {
        startPage = totalPages - maxPageNumbers + 2;
      }

      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/members.csv");
        if (!response.ok) {
          throw new Error('Failed to fetch members data');
        }
        const reader = await response.text();

        Papa.parse(reader, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setMembers(result.data as Member[]);
            setLoading(false);
          },
          error: (err) => {
            console.error("CSV parsing error:", err);
            setError("Failed to parse members data");
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load members data");
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-legal-accent py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Members 2024 - 2025
          </h1>

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
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-legal mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading members...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-red-600">{error}</h3>
              <p className="text-gray-500 mt-2">Please try refreshing the page.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentMembers.map((member, index) => (
                  <MemberCard
                    key={index}
                    name={`${member.first_name} ${member.last_name}`}
                    email={member.email_id}
                    enrl_number={member.enrl_number}
                    imageUrl={member?.photo ? true : false}
                    mobile_number={member?.mobile_number}
                    res_addr={member?.res_addr}
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
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-legal hover:bg-legal-accent"
                      }`}
                    >
                      &lt;
                    </button>

                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                        disabled={typeof page !== 'number'}
                        className={`px-3 py-1 rounded-md ${
                          typeof page === 'number'
                            ? currentPage === page
                              ? "bg-legal text-white"
                              : "text-legal hover:bg-legal-accent"
                            : "text-gray-400 cursor-default"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-legal hover:bg-legal-accent"
                      }`}
                    >
                      &gt;
                    </button>
                  </nav>
                </div>
              )}

              {/* No results message */}
              {filteredMembers.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700">
                    No members found matching your search.
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Please try a different search term.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;
