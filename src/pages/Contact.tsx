
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl">Get in touch</p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Do you need help?<br /><span className="text-legal">Contact us now!</span></h2>
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-legal"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address:</h3>
                    <address className="not-italic text-gray-600 mt-1">
                      <p>2nd Floor, District Court Complex,</p>
                      <p>Kottayi, Thrithampangotukara-Meenakshipuram</p>
                      <p>Karathuparicha, Kunathurmedu</p>
                      <p>Palakkad, Kerala 678 001</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-legal"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone:</h3>
                    <p className="text-gray-600 mt-1">+91 8089682807</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-legal"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email:</h3>
                    <p className="text-gray-600 mt-1">palakkadbarassociation@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-legal p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center text-white mb-6">Contact us now!</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4329473459795!2d76.65504601224276!3d10.775534056689545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d31b1%3A0xf541a050c4a7bca0!2sDistrict%20Court%20Complex%2C%20Palakkad!5e0!3m2!1sen!2sin!4v1658574309042!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Palakkad District Bar Association"
            ></iframe>
          </div>
          
          <div className="text-center mt-4">
            <a 
              href="https://goo.gl/maps/7kGVL3KzCxS2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-legal hover:underline"
            >
              View on full map
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
