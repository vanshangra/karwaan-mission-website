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
          <div className="w-full space-y-12">
            {/* Full-bleed hero to match our-vision & our-people */}
            <div className="relative w-full">
              <img
                src="/images/1.jpg"
                alt="Our Story"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-green-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="w-full px-6 lg:px-16">
                  <div className="max-w-5xl text-white text-left">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Our Story</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl opacity-95">Started with a handful of committed neighbours and volunteers, today we are a large, diverse team — united by the belief that small actions create lasting change.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Constrained content to retain master-level UI rhythm */}
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 bg-white rounded-2xl p-10 shadow-lg">
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-4">From Few to Many</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">What began as a community clean-up led by a small group quickly found resonance. Through dedication, transparent operations, and measurable outcomes, more volunteers, partners, and supporters joined — growing our reach across cities and neighbourhoods.</p>
                    <p className="text-gray-700 leading-relaxed mb-6">Our evolution is rooted in listening to communities, designing low-friction programs, and creating livelihood pathways. Today, we partner with schools, local bodies, corporates and civic groups to scale interventions while retaining a human-centred approach.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="p-6 rounded-xl bg-emerald-50">
                        <h5 className="font-semibold text-gray-900">People-first</h5>
                        <p className="text-sm text-gray-600 mt-2">We prioritise dignity, livelihoods and local leadership at every step.</p>
                      </div>
                      <div className="p-6 rounded-xl bg-emerald-50">
                        <h5 className="font-semibold text-gray-900">Evidence-driven</h5>
                        <p className="text-sm text-gray-600 mt-2">Programs shaped by data, field feedback and continuous improvement.</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Journey Timeline</h4>
                      <div className="timeline">
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <div className="font-bold text-emerald-700">2018</div>
                            <div className="text-sm text-gray-600">Founded by neighbours; first clean-up and awareness events.</div>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <div className="font-bold text-emerald-700">2020</div>
                            <div className="text-sm text-gray-600">Expanded to schools, launched behaviour campaigns and volunteer training.</div>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <div className="font-bold text-emerald-700">2023</div>
                            <div className="text-sm text-gray-600">Started RRR centres and piloted livelihood-linked models.</div>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <div className="font-bold text-emerald-700">2024 - Present</div>
                            <div className="text-sm text-gray-600">Team scaled significantly; formal partnerships and regional pilots underway.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition">See Our Impact</button>
                      <a href="#our-people" className="text-emerald-700 font-medium underline">Meet the Team</a>
                    </div>
                  </div>

                  <aside className="bg-white rounded-2xl p-6 shadow-lg">
                    <h5 className="text-lg font-bold text-gray-900 mb-4">By the numbers</h5>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-extrabold text-emerald-700">25+</div>
                          <div className="text-sm text-gray-600">Core team members</div>
                        </div>
                        <div>
                          <div className="text-2xl font-extrabold text-emerald-700">1000+</div>
                          <div className="text-sm text-gray-600">Volunteers & community members</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-emerald-50">
                        <div className="font-semibold text-gray-900">Current focus</div>
                        <div className="text-sm text-gray-600">Scaling RRR centres, school partnerships, and youth leadership programs.</div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        );

      case "our-vision":
        return (
          <div className="w-full space-y-12">
            {/* Full-bleed hero (same width behavior as our-people) */}
            <div className="relative w-full">
              <img
                src="/images/vision/v-image.jpg"
                alt="Our Vision"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-green-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="w-full px-6 lg:px-16">
                  <div className="max-w-5xl text-white text-left">
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Our Vision</h2>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl opacity-95">Inspiring communities and youth to build sustainable, resilient, and equitable futures through education, innovation and grassroots action.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content area (almost full width but constrained for readability) */}
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto space-y-10">
                {/* Vision + Mission two-column */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Vision</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      To create an equitable and sustainable society where environmental responsibility and inclusive growth go hand-in-hand, ensuring dignity, health and opportunity for all.
                    </p>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Model of Action</h4>
                    <p className="text-gray-700 mb-4">
                      Our model of action is based on inspiration: we inspire children and youth to pursue purpose and practice empathy. We rely on the strength of volunteers and the energy of youth to catalyze systemic, organic change at the community level.
                    </p>
                    <div className="inline-flex items-center gap-3">
                      <div className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold">Community-driven</div>
                      <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Education-first</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Mission</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      To design and implement community-centric models for sustainable waste management, awareness generation and skill-based livelihood development — fostering long-term environmental resilience and social empowerment.
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 font-bold">1</div>
                        <div>
                          <div className="font-semibold text-gray-800">Inspire & Mobilize</div>
                          <div className="text-sm text-gray-600">Volunteers, schools and youth as core change agents</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">2</div>
                        <div>
                          <div className="font-semibold text-gray-800">Implement & Scale</div>
                          <div className="text-sm text-gray-600">Community programs, RRR centres and livelihood models</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Theory of Change / Transformation */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Theory of Change</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our approach targets educational inequality by improving infrastructure, enabling modern teaching methods, and creating livelihoods linked to the circular economy. We aim to transform the lives of less privileged children and youth by maximizing measurable impact in the education sector.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Upgrade basic school infrastructure to improve attendance and learning outcomes.</li>
                        <li>Introduce modern teaching-learning methods and teacher support systems.</li>
                        <li>Create livelihood pathways via waste-to-value initiatives and SHG-led enterprises.</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-center">
                      {/* image slot - user can replace with their image */}
                      <img src="/images/vision/vision(2).png" alt="Transformation" className="object-cover w-full h-40 rounded-md" />
                    </div>
                  </div>
                </div>

                {/* Commitment / Three pillars displayed as cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Infrastructure Development</h5>
                    <p className="text-gray-600 text-sm">Upgrading basic infrastructure facilities in schools to create safe and conducive learning environments.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Modern Teaching Methods</h5>
                    <p className="text-gray-600 text-sm">Providing access to modern pedagogies and tools to improve learning outcomes and teacher effectiveness.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Compassionate Society</h5>
                    <p className="text-gray-600 text-sm">Foster empathy and community engagement to create inclusive and supportive environments for children.</p>
                  </div>
                </div>

                {/* Global challenges + SDG alignment compact */}
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Addressing Key Challenges</h4>
                      <p className="text-gray-600">We focus on interconnected issues like hunger, poverty, gender discrimination, poor health, lack of clean water, sanitation, and educational inequality — aligning our work with the UN SDGs.</p>
                    </div>
                    <div className="w-44 flex-shrink-0">
                      <div className="bg-emerald-600 text-white rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold">17</div>
                        <div className="text-sm">UN SDGs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Focus Areas: two per row */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Strategic Focus Areas 2025 - 2030</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pair 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition flex items-start gap-4">
                      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full border-2 border-emerald-200 p-3 bg-emerald-50 shadow-sm overflow-hidden">
                        <img src="/images/vision/icon1.png" alt="Sustainable Waste" className="w-20 h-20 object-contain rounded-md" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Sustainable Waste Management & Resource Recovery</h4>
                        <p className="text-sm text-gray-600">Establish waste segregation systems, RRR centres and circular economy pilots across urban and rural geographies.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition flex items-start gap-4">
                      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full border-2 border-emerald-200 p-3 bg-emerald-50 shadow-sm overflow-hidden">
                        <img src="/images/vision/icon2.png" alt="Community Engagement" className="w-20 h-20 object-contain rounded-md" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Community Engagement & Environmental Education</h4>
                        <p className="text-sm text-gray-600">Mobilize youth, RWAs and schools for sustained behaviour change through campaigns and curriculum integration.</p>
                      </div>
                    </div>

                    {/* Pair 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition flex items-start gap-4">
                      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full border-2 border-emerald-200 p-3 bg-emerald-50 shadow-sm overflow-hidden">
                        <img src="/images/vision/icon3.png" alt="Livelihood Generation" className="w-20 h-20 object-contain rounded-md" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Livelihood Generation through Waste Economy</h4>
                        <p className="text-sm text-gray-600">Create income through upcycling, SHG-led collection centres and skill development for circular-economy jobs.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition flex items-start gap-4">
                      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full border-2 border-emerald-200 p-3 bg-emerald-50 shadow-sm overflow-hidden">
                        <img src="/images/vision/icon4.png" alt="Governance & Policy" className="w-20 h-20 object-contain rounded-md" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Governance & Policy Alignment for Waste Reforms</h4>
                        <p className="text-sm text-gray-600">Support local bylaws, BWG compliance and EPR execution with ULBs, SHGs and citizen participation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "our-people":
        return (
          <div className="w-full">
            {/* Hero Image Section - match our-vision full-bleed hero */}
            <div className="relative w-full">
              <img
                src="/images/people/people.jpg"
                alt="Our People"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-700/40"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="w-full px-6 lg:px-16">
                  <div className="max-w-5xl text-white text-left">
                    <h2 className="text-5xl md:text-5xl font-bold leading-tight drop-shadow-lg">Meet Our Team </h2>
                    <p className="mt-4 text-xl md:text-xl max-w-3xl opacity-95">Ordinary people with an extraordinary mission – to uplift lives and create lasting impact.</p>
                  </div>
                </div>
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
                          src="/images3/people/f1.png"
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
                          src="/images3/people/f2.png"
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
                          src="/images3/people/f3.png"
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
                          src="/images3/people/f4.png"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Team Member 1 */}
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">
                        <img
                          src="/images3/people/t1.png"
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
                          src="/images3/people/t2.png"
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
                          src="/images3/people/t3.png"
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
                          src="/images3/people/t4.png"
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
                          src="/images3/people/t5.png"
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
                          src="/images3/people/t6.png"
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
                          src="/images3/people/t7.png"
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
                          src="/images3/people/t8.png"
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
                          src="/images3/people/t9.png"
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
                          src="/images3/people/t10.png"
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
                          src="/images3/people/t11.png"
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
                          src="/images3/people/a1.png"
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
                          src="/images3/people/a2.png"
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
                          src="/images3/people/a3.png"
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
                          src="/images3/people/a4.png"
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
                          src="/images3/people/a5.png"
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
                          src="/images3/people/a6.png"
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
                          src="/images3/people/a7.png"
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
                          src="/images3/people/c1.png"
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
                          src="/images3/people/c2.png"
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
                          src="/images3/people/c3.png"
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
