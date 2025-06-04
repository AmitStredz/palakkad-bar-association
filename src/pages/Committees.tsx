import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import Papa from 'papaparse';

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

const Committees = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/members.csv');
        const reader = await response.text();
  
        Papa.parse(reader, {
          header: true, // assumes first row is header
          skipEmptyLines: true,
          complete: (result) => {
            setMembers(result.data);
          },
          error: (err) => {
            console.error('CSV parsing error:', err);
          },
        });
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero-section relative py-16 md:py-24 text-white"
        style={{
          backgroundImage: "url('/images/contact.png')"
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Members</h1>
          <p className="text-xl">Working together for legal excellence</p>
        </div>
      </section>
      
      {/* Members List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Our Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member, index) => {
                console.log(index, member);
                return (
                <MemberCard
                  key={index}
                  name={`${member.first_name} ${member.last_name}`}
                  email={member.email_id}
                  enrl_number={member.enrl_number}
                  imageUrl={member?.photo? true: false}
                  mobile_number={member?.mobile_number}
                  res_addr={member?.res_addr}

                />
                )
              })}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Committees;
