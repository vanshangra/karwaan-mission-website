import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const [activeSection, setActiveSection] = useState("our-story");
  const location = useLocation();

  // Handle URL parameters to set a
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
          <div className="space-y-8">
            {/* Full-bleed hero for Vision (match our-people behavior) */}
            <div className="relative w-full">
              <img
                src="/images/2.jpg"
                alt="Our Vision"
                className={`w-full h-96 object-cover ${activeSection === 'our-vision' ? '' : 'rounded-lg shadow-lg'}`}
              />
              <div className={`absolute inset-0 bg-black bg-opacity-30 ${activeSection === 'our-vision' ? '' : 'rounded-lg'}`}></div>
            </div>

            {/* Vision Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                To create an equitable and sustainable society where environmental responsibility and 
                inclusive growth go hand in hand, ensuring dignity, health, and opportunity for all.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                To design and implement community-centric/driven models for sustainable waste 
                management, impactful awareness generation, and skill-based livelihood development—
                fostering long term environmental resilience and social empowerment.
              </p>
            </div>

            {/* Strategic Focus Areas */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Strategic Focus Areas 2025 - 2030</h3>
              {/* Show two focus cards per row on md+ screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                
                {/* Focus Area 1 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Sustainable Waste Management & Resource Recovery</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Establishing efficient waste segregation systems, operating RRR (Reduce, Reuse, Recycle) centres, 
                    promoting plastic collection drives, and enabling local circular economy models in urban and rural areas.
                  </p>
                </div>

                {/* Focus Area 2 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Community Engagement & Environmental Education</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Mobilizing youth, RWAs, and schools through cleanliness drives, anti-plastic campaigns, 
                    plantation linked to waste-free zones, and promoting child education linked to environmental awareness.
                  </p>
                </div>

                {/* Focus Area 3 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Livelihood Generation through Waste Economy</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Creating income opportunities by engaging communities in waste segregation, tailoring units using 
                    upcycled materials, SHG-led dry waste collection centres, and skill training for circular economy jobs.
                  </p>
                </div>

                {/* Focus Area 4 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Governance & Policy Alignment for Waste Reforms</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Promoting waste bylaws, BWG compliance, EPR execution, and decentralized systems through 
                    ULBs, RRBs, SHGs, and citizen participation as per SBM-U, SBM-R and SWM Rules 2016.
                  </p>
                </div>
              </div>
            </div>

            {/* Professions UI - placeholders for images that user will add later */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Professions</h4>
              <p className="text-sm text-gray-600 mb-4">Add images for professions below. Placeholders are shown; replace `src` with actual images when ready.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-gray-50 rounded-lg overflow-hidden h-36 flex items-center justify-center mb-3">
                      <img src={`/images/people/placeholder-${idx + 1}.png`} alt={`Profession ${idx + 1}`} className="object-cover h-full w-full opacity-60" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Profession {idx + 1}</div>
                    <div className="text-xs text-gray-500">Role / short title</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "our-people":
        return (
          <div className="w-full">
            {/* Hero Image Section */}
            <div className="relative w-full">
              <img
                src="/images/3.jpg"
                alt="Our People"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center">Team Members</h3>
              </div>
            </div>

            {/* Team Introduction */}
            <div className="bg-white py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Since 2020, Karwaan Mission has grown from a volunteer movement into a professionally 
                        run and managed institution with over 25 dedicated staff all focused on the mission to 
                        transform as many lives as possible.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        We are a dedicated and motivated team of professionals that strive towards 
                        achieving Karwaan's goals and maximizing sustainable impact on the ground. We 
                        stand for the following values imbibed into the ethos of the organisation:
                      </p>
                    </div>
                    <div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span><strong>Be Changemakers, Be Productive, Be Dynamic, Be Grateful, Be Unstoppable</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span><strong>Be Creative</strong> – Proactive action to solve a community problem. Keep empathy and humility at the core</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span><strong>Be Productive</strong> – Focus on tasks and work towards fulfilling them with mindfulness and happiness</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span><strong>Be Dynamic</strong> – Be energized and a force to reckon with</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">●</span>
                          <span><strong>Be Grateful</strong> – Be aware of your opportunity to help others</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founders Section */}
            <div className="bg-gray-50 py-16">
              <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold text-center text-gray-900 mb-16">Founders</h4>
                <div className="max-w-6xl mx-auto space-y-16">
                  {/* Founder 1 & 2 Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Founder 1 */}
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/people/f1.png"
                          alt="Mr. Dhaniram Yadav"
                          className="w-40 h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 pt-2">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Mr. Dhaniram Yadav</h5>
                        <p className="text-green-600 font-semibold mb-3">Founder and Managing Director, Karwaan Mission</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          SWM | Plastic Waste Sustainable Expert | RRR Centre's Solution<br/>
                          Former Consultant, Centre for Environment Education (CEE), Rural and Urban Landscape Free of Dry and Plastic Waste, RRR Centres
                        </p>
                      </div>
                    </div>

                    {/* Founder 2 */}
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/people/f2.png"
                          alt="Mr. Kailsah Arya"
                          className="w-40 h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 pt-2">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Mr. Kailash Arya</h5>
                        <p className="text-green-600 font-semibold mb-3">Co Founder and CEO, Karwaan Mission</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Former CEO & Co-founder – Verbatim Research Services Pvt. Ltd.<br/>
                          25+ Years in Market Research | Strategy | Operations | Social Impact
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Founder 3 & 4 Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Founder 3 */}
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/people/f3.png"
                          alt="Mr. Amit Bhattacharya"
                          className="w-40 h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 pt-2">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Mr. Amit Bhattacharya</h5>
                        <p className="text-green-600 font-semibold mb-3">Co-Founder, Strategic Partnerships & CSR Affairs, Karwaan Mission</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          BBA, UNSW, Australia, MBA, UTS, Sydney, Australia<br/>
                          Over 24 years industry experience in Management Consulting, Research and Social sector.<br/>
                          Worked in senior positions with organizations such as AT Kearney, CRISIL and the Shell Foundation
                        </p>
                      </div>
                    </div>

                    {/* Founder 4 */}
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/people/f4.png"
                          alt="Dr. Vineet Nakra"
                          className="w-40 h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 pt-2">
                        <h5 className="text-xl font-bold text-gray-900 mb-2">Dr. Vineet Nakra</h5>
                        <p className="text-green-600 font-semibold mb-3">Co-Founder, Karwaan Mission</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          MBBS, DNB, MNAMS<br/>
                          Radiation Oncologist | Public Health Advocate | Impact Strategist<br/>
                          Apollo Proton | Max Healthcare | Immuno-Oncology Trained
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Team Section */}
            <div className="bg-white py-16">
              <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Team</h4>
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {/* Team Member 1 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t1.png"
                          alt="Mr. Amit Kumar"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Amit Kumar</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Senior Program Director (Environmental Management), Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Sustainable Solutions | Circular Economy | Climate Action<br/>
                        300+ Govt. Officials Trained<br/>
                        Empaneled Resource Person – Ministry of Jal Shakti (MoJS) | Net Zero Facilitator (CII GreenCo)
                      </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t2.png"
                          alt="Mr.John Thomas"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr.John Thomas</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Vice President - Karwaan Mission  </p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                      B.Tech (Mech. Engg., Kerala University) | PGCert (Industrial Pollution Control – NPC)   Over 30 years’ expertise in Wastewater, Solid Waste & Circular Economy Solutions  • Accredited Trainer – Wastewater Management, SCGJ, Govt. of India   • Accredited Solar Chartered Engineer – MNRE, Govt. of India   • Associate Member – Institution of Engineers (India)
                      </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t3.png"
                          alt="Mr. Ram Suresh Yadav"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Ram Suresh Yadav</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Chief Operation Officer, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Expert in Sustainable Plastic Waste Management<br/>
                        Waste Characterization & Quantification | SBM 2.0 Implementation
                      </p>
                    </div>

                    {/* Team Member 4 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t4.png"
                          alt="Ms. Kajal Kumari Sahani"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Ms. Kajal Kumari Sahani</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Program Manager, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Specialist in Program Implementation<br/>
                        Livelihood & WASH Initiatives | Stakeholder Engagement
                      </p>
                    </div>

                    {/* Team Member 5 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t5.png"
                          alt="Mr. Jata Shankar"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Jata Shankar</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Chief Communications Officer, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Waste Characterization & Quantification Expert
                      </p>
                    </div>

                    {/* Team Member 6 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t6.png"
                          alt="Mr. Anuj Verma"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Anuj Verma</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Program Coordinator, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Experts in Solid Waste Management<br/>
                        Composting Techniques and IEC
                      </p>
                    </div>

                    {/* Team Member 7 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t7.png"
                          alt="Mr. Manish Agnihotri"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Manish Agnihotri</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Community Engagement Officer</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Specialist in Community Engagement and Outreach
                      </p>
                    </div>

                    {/* Team Member 8 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t8.png"
                          alt="Ms. Yogita"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Ms. Yogita</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Community Mobilizer | MIS Executive, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Empowering Women & Children<br/>
                        Team Building | MIS Reporting
                      </p>
                    </div>

                    {/* Team Member 9 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t9.png"
                          alt="Mr. Umesh Pratap Singh"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Umesh Pratap Singh</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Social Mobilizer, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Expert in Social Mobilization and Community Development
                      </p>
                    </div>

                    {/* Team Member 10 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t10.png"
                          alt="Dr. Ram Pratap"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Dr. Ram Pratap</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Consultant - Health IEC Experts, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Driving Health Awareness for Rural Communities
                      </p>
                    </div>

                    {/* Team Member 11 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images/people/t11.png"
                          alt="Mr. Manraj Yadav"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Manraj Yadav</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Social Mobilizer, Karwaan Mission</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Expert in Social Mobilization and Community Outreach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Board Section */}
            <div className="bg-gray-50 py-16">
              <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold text-center text-gray-900 mb-16">Advisory Board</h4>
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Advisory Member 1 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a1.png"
                          alt="Mr. Vipin Arora"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Vipin Arora</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Advisor - Driving Sustainability, CSR & Social Impact</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Quantitative Research | B2B Research | Opportunity Evaluation | Product Concept Evaluation | Competitor Analysis | Business Intelligence | Online Research Panel
                      </p>
                    </div>

                    {/* Advisory Member 2 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a2.png"
                          alt="Mr. Prabhjot Singh Sodhi MBE"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Prabhjot Singh Sodhi MBE</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Advisor – Circular Economy</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Sr. Program Director - Circular Economy, Centre for Environment Education (CEE) & Ex-Head Circular Economy UNDP, New Delhi
                      </p>
                    </div>

                    {/* Advisory Member 3 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a3.png"
                          alt="Mr. Pankaj Jha"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Pankaj Jha</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Advisor - Leading Strategic Partnerships & Transformative Projects</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Brand, Advertising & Media Research | Neuroscience Tools | Sensorial Analysis | Customer Satisfaction | Segmentation | Project Leadership & Institutional Engagement
                      </p>
                    </div>

                    {/* Advisory Member 4 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a4.png"
                          alt="Mr. Rajesh Pawaha"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Rajesh Pawaha</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Global Strategic Advisor - Plastic Recycling, Waste Innovation & Circular Economy</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Founder & CEO 21 Century Polymers | 35+ yrs experience | Polymer Recycling | MRF Ops | Biodegradable Materials
                      </p>
                    </div>

                    {/* Advisory Member 5 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a5.png"
                          alt="Mr. Durga Charan Das"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Durga Charan Das</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Legal Advisor</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Ex-IRS | 38+ yrs Service | Legal & Taxation Expert | NTPC Korba • ACIT/DCIT (Odisha) • CIT (Delhi, Tamil Nadu) | Principal CIT – Kanpur • ITAT – Odisha
                      </p>
                    </div>

                    {/* Advisory Member 6 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a6.png"
                          alt="Mr. Harish Arya"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Harish Arya</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Advisor – Market Research | Social Impact | Livelihood Creation</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Founder & Managing Director | Intact India Market Research Pvt Ltd
                      </p>
                    </div>

                    {/* Advisory Member 7 */}
                    <div className="text-center">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4">
                        <img
                          src="/images/people/a7.png"
                          alt="Mr. Mukesh Kumar Verma"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-1">Mr. Mukesh Kumar Verma</h5>
                      <p className="text-green-600 font-medium text-sm mb-2">Advisor - Strategy & Growth</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        BRAS COACH-MUKKI | Believe in Yourself "You Have Entered into The World Of Opportunities Be Ready To know How Right People Right Place"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultants Section */}
            <div className="bg-white py-16">
              <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold text-center text-gray-900 mb-16">Consultants</h4>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Consultant 1 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-6">
                        <img
                          src="/images/people/c1.png"
                          alt="Ms. Susmita Chanda"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      <h5 className="text-xl font-semibold text-gray-900 mb-2">Ms. Susmita Chanda</h5>
                      <p className="text-green-600 font-medium mb-3">Consultant – Environment & Sustainability</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lead – Environmental Education & Waste Management Initiatives
                      </p>
                    </div>

                    {/* Consultant 2 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-6">
                        <img
                          src="/images/people/c2.png"
                          alt="Mr. Vishal Chaudhary"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      <h5 className="text-xl font-semibold text-gray-900 mb-2">Mr. Vishal Chaudhary</h5>
                      <p className="text-green-600 font-medium mb-3">Consultant - Strategic Partnerships</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert in building strategic alliances and institutional partnerships for social impact
                      </p>
                    </div>

                    {/* Consultant 3 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-6">
                        <img
                          src="/images/people/c3.png"
                          alt="Ms. Neha Arya"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      <h5 className="text-xl font-semibold text-gray-900 mb-2">Ms. Neha Arya</h5>
                      <p className="text-green-600 font-medium mb-3">Consultant – Woman Health & Hygiene</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Specialist in women's health initiatives and hygiene programs for rural communities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Our Team CTA */}
            <div className="bg-green-600 text-white py-16">
              <div className="container mx-auto px-4 text-center">
                <h4 className="text-3xl font-bold mb-4">Want to Join Our Mission?</h4>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  We're always looking for passionate individuals who want to make a difference. 
                  Whether you're interested in full-time roles, volunteering, or consulting opportunities.
                </p>
                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Explore Opportunities
                </button>
              </div>
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
        {/* Keep layout decision centralized: our-people and our-vision will render full-width hero */}
        <div className={`${activeSection === 'our-people' || activeSection === 'our-vision' ? 'max-w-full' : 'max-w-4xl'} mx-auto`}>
          <div className={`${activeSection === 'our-people' || activeSection === 'our-vision' ? 'bg-transparent' : 'bg-white rounded-lg shadow-sm'} ${activeSection === 'our-people' || activeSection === 'our-vision' ? 'p-0' : 'p-8'}`}>
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
