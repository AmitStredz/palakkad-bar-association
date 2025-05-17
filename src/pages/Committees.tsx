
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample members data
const executiveCommittee = [
  { name: "Adv. Yeshwant Shenoy", position: "President", id: "BRF123411" },
  { name: "Adv. Aarav Kumar", position: "Vice President", id: "BRF123412" },
  { name: "Adv. Priya Menon", position: "Secretary", id: "BRF123413" },
  { name: "Adv. Rajesh Nair", position: "Treasurer", id: "BRF123414" },
  { name: "Adv. Sarika Iyer", position: "Joint Secretary", id: "BRF123415" },
  { name: "Adv. Mohan Krishnan", position: "Executive Member", id: "BRF123416" },
  { name: "Adv. Ananya Pillai", position: "Executive Member", id: "BRF123417" },
  { name: "Adv. Vivek Sharma", position: "Executive Member", id: "BRF123418" },
  { name: "Adv. Deepa Menon", position: "Executive Member", id: "BRF123419" },
  { name: "Adv. Suresh Nambiar", position: "Executive Member", id: "BRF123420" },
];

const legalAidCommittee = [
  { name: "Adv. Lakshmi Nair", position: "Chairperson", id: "BRF123421" },
  { name: "Adv. Karthik Menon", position: "Secretary", id: "BRF123422" },
  { name: "Adv. Divya Patel", position: "Member", id: "BRF123423" },
  { name: "Adv. Arjun Krishna", position: "Member", id: "BRF123424" },
  { name: "Adv. Meena Rajan", position: "Member", id: "BRF123425" },
  { name: "Adv. Thomas Philip", position: "Member", id: "BRF123426" },
];

const disciplinaryCommittee = [
  { name: "Adv. Ramesh Iyer", position: "Chairperson", id: "BRF123427" },
  { name: "Adv. Sunita Menon", position: "Secretary", id: "BRF123428" },
  { name: "Adv. Vikram Singh", position: "Member", id: "BRF123429" },
  { name: "Adv. Reshma Shah", position: "Member", id: "BRF123430" },
  { name: "Adv. Joseph Thomas", position: "Member", id: "BRF123431" },
];

const libraryCommittee = [
  { name: "Adv. Anand Kumar", position: "Chairperson", id: "BRF123432" },
  { name: "Adv. Beena George", position: "Secretary", id: "BRF123433" },
  { name: "Adv. Rahul Nair", position: "Member", id: "BRF123434" },
  { name: "Adv. Nisha Varma", position: "Member", id: "BRF123435" },
  { name: "Adv. Samuel John", position: "Member", id: "BRF123436" },
];

const welfareCommittee = [
  { name: "Adv. Maya Pillai", position: "Chairperson", id: "BRF123437" },
  { name: "Adv. Ravi Varma", position: "Secretary", id: "BRF123438" },
  { name: "Adv. Leela Nair", position: "Member", id: "BRF123439" },
  { name: "Adv. Ajith Kumar", position: "Member", id: "BRF123440" },
  { name: "Adv. Sheela Thomas", position: "Member", id: "BRF123441" },
];

const Committees = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Committees</h1>
          <p className="text-xl">Working together for legal excellence</p>
        </div>
      </section>
      
      {/* Committees Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Our Committee Structure</h2>
            <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              The Palakkad District Bar Association operates through various specialized committees that focus on specific aspects of our mission and services. These committees are formed by elected members who volunteer their time and expertise.
            </p>
            
            <Tabs defaultValue="executive" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
                <TabsTrigger value="executive">Executive</TabsTrigger>
                <TabsTrigger value="legalaid">Legal Aid</TabsTrigger>
                <TabsTrigger value="disciplinary">Disciplinary</TabsTrigger>
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="welfare">Welfare</TabsTrigger>
              </TabsList>
              
              <TabsContent value="executive">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Executive Committee</h3>
                  <p className="text-gray-700 mb-6">
                    The Executive Committee is the primary governing body of the Bar Association. It is responsible for the overall management, policy decisions, and representation of the association in external matters.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                    {executiveCommittee.map((member) => (
                      <MemberCard 
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        id={member.id}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="legalaid">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Legal Aid Committee</h3>
                  <p className="text-gray-700 mb-6">
                    The Legal Aid Committee coordinates pro bono legal services for underprivileged individuals and communities. It organizes legal awareness camps, free consultation clinics, and represents indigent clients in court.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
                    {legalAidCommittee.map((member) => (
                      <MemberCard 
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        id={member.id}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="disciplinary">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Disciplinary Committee</h3>
                  <p className="text-gray-700 mb-6">
                    The Disciplinary Committee upholds professional ethics and standards among association members. It investigates complaints, conducts hearings, and recommends appropriate actions in cases of professional misconduct.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                    {disciplinaryCommittee.map((member) => (
                      <MemberCard 
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        id={member.id}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="library">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Library Committee</h3>
                  <p className="text-gray-700 mb-6">
                    The Library Committee manages the association's legal library resources. It is responsible for acquiring new books, journals, and digital resources, and ensuring that members have access to up-to-date legal information.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                    {libraryCommittee.map((member) => (
                      <MemberCard 
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        id={member.id}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="welfare">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Welfare Committee</h3>
                  <p className="text-gray-700 mb-6">
                    The Welfare Committee focuses on the well-being of association members. It administers welfare schemes, health insurance programs, and financial assistance for members in need, and organizes social and cultural events.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                    {welfareCommittee.map((member) => (
                      <MemberCard 
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        id={member.id}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Committees;
