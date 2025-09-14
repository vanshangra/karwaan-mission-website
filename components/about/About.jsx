import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const [activeSection, setActiveSection] = useState("our-story");
  const location = useLocation();

  // Handle URL parameters to set active section
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');
    if (section && ['our-story', 'our-vision', 'our-people'].includes(section)) {
      setActiveSection(section);
    }
  }, [location.search]);

  const sections = [
    { id: "our-story", label: "Our Story", bgColor: "bg-green-600" },
    { id: "our-vision", label: "Our Vision", bgColor: "bg-green-600" },
    { id: "our-people", label: "Our People", bgColor: "bg-green-600" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "our-story":
        return (
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/images/1.jpg"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
            </div>
            <div className="text-lg leading-relaxed text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="mb-4">
                [Add your organization's story here - how Karwaan Mission began, 
                the inspiration behind it, and the journey so far.]
              </p>
              <p className="mb-4">
                [Describe key milestones, challenges overcome, and growth moments 
                that shaped your mission.]
              </p>
              <p>
                [Share what drives your team and the impact you've made in the community.]
              </p>
            </div>
          </div>
        );

      case "our-vision":
        return (
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/images/2.jpg"
                alt="Our Vision"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
            </div>
            <div className="text-lg leading-relaxed text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="mb-4">
                [Describe your vision for the future - what you hope to achieve 
                and the world you want to create.]
              </p>
              <p className="mb-4">
                [Explain your long-term goals and the impact you want to have 
                on society and communities.]
              </p>
              <p>
                [Share your aspirations and how you plan to make lasting change.]
              </p>
            </div>
          </div>
        );

      case "our-people":
        return (
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/images/3.jpg"
                alt="Our People"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
            </div>
            <div className="text-lg leading-relaxed text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our People</h3>
              <p className="mb-4">
                [Introduce your team members, volunteers, and the people who make 
                your mission possible.]
              </p>
              <p className="mb-4">
                [Highlight the diverse backgrounds, skills, and passion that your 
                team brings to the work.]
              </p>
              <p>
                [Share stories about your team's dedication and the community that 
                supports your mission.]
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about Karwaan Mission, our vision, and the people behind our work
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-0 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`
                  flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300
                  ${
                    activeSection === section.id
                      ? `${section.bgColor} text-white border-transparent`
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the change you want to see in the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Get Involved
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-900 transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
