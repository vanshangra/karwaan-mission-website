import React, { useEffect, useMemo, useState } from "react";

const PARTNERS = [
  {
    id: 1,
    name: "GreenWorks Foundation",
    logo: "/images/partners/greenworks.png",
    type: "Implementation Partner",
    location: "New Delhi, India",
    website: "https://greenworks.example",
    contact: "partnerships@greenworks.example",
    summary:
      "Supports on-ground implementation of waste-segregation pilots, community training and capacity building for RRR centres.",
    details:
      "Worked with municipal bodies to deploy 10+ community RRR pilots. Provides training curriculum, trainer-of-trainer programs and impact measurement support.",
  },
  {
    id: 2,
    name: "EcoLearn Trust",
    logo: "/images/partners/ecolearn.png",
    type: "Education Partner",
    location: "Mumbai, India",
    website: "https://ecolearn.example",
    contact: "hello@ecolearn.example",
    summary:
      "Curriculum partner for school-based environmental education and youth leadership programs.",
    details:
      "Co-developed modular curriculum used across 50+ schools. Runs teacher-training and student ambassador programs.",
  },
  {
    id: 3,
    name: "Circular Solutions Pvt Ltd",
    logo: "/images/partners/circular.png",
    type: "Enterprise Partner",
    location: "Bengaluru, India",
    website: "https://circular.example",
    contact: "contact@circular.example",
    summary:
      "Provides upcycling, product design and market access for waste-to-value pilots and SHG enterprises.",
    details:
      "Supports product development, quality control and access to local and online marketplaces for upcycled products.",
  },
];

// Utility: unique types for filter tabs
const PARTNER_TYPES = ["All", ...Array.from(new Set(PARTNERS.map((p) => p.type)))];

export default function Partner() {
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  const filtered = useMemo(() => {
    return PARTNERS.filter((p) => {
      const matchesType = type === "All" ? true : p.type === type;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchesType && (!q || matchesQuery);
    });
  }, [query, type]);

  return (
    <section id="partners" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Our Partners</h2>
            <p className="text-gray-600 max-w-3xl mt-2">
              Organisations we collaborate with to scale programs, share expertise and
              create sustainable livelihood pathways.
            </p>
          </div>

          <div className="flex gap-3 items-center w-full md:w-auto">
            <div className="hidden md:flex items-center ml-3 space-x-2">
              {PARTNER_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`text-sm px-3 py-1 rounded-full border transition ${
                    type === t
                      ? "bg-emerald-700 text-white border-emerald-700"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* small-screen tabs */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-4">
          {PARTNER_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-shrink-0 text-sm px-3 py-1 rounded-full border transition ${
                type === t
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12 rounded-lg border border-dashed">
              No partners found. Try a different search or filter.
            </div>
          ) : (
            filtered.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gray-50 border">
                    <img
                      src={p.logo}
                      alt={p.name}
                      loading="lazy"
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/images/partners/placeholder.png";
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {p.name}
                        </h3>
                        <div className="text-xs text-emerald-700 font-medium">
                          {p.type}
                        </div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500">{p.location}</div>
                    </div>

                    <p className="text-sm text-gray-600 mt-3 line-clamp-3">{p.summary}</p>

                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 text-sm font-medium hover:underline"
                      >
                        Visit
                      </a>
                      <button
                        onClick={() => setActive(p)}
                        className="text-sm bg-emerald-700 text-white px-3 py-1 rounded-full hover:bg-emerald-800 transition"
                      >
                        Details
                      </button>
                      <a
                        href={`mailto:${p.contact}`}
                        className="text-sm text-gray-600 hover:underline ml-auto"
                      >
                        {p.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* modal / details */}
        {active && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setActive(null)}
            />
            <div className="relative bg-white rounded-2xl max-w-4xl w-full p-6 shadow-xl z-10">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-28 h-28 flex items-center justify-center rounded-lg bg-gray-50 border">
                  <img
                    src={active.logo}
                    alt={active.name}
                    className="w-24 h-24 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/images/partners/placeholder.png";
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{active.name}</h4>
                      <div className="text-sm text-emerald-700 font-medium">
                        {active.type} • {active.location}
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <a
                        href={active.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-emerald-700 hover:underline"
                      >
                        Website
                      </a>
                      <a
                        href={`mailto:${active.contact}`}
                        className="text-sm text-gray-600 hover:underline"
                      >
                        Contact
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mt-4">{active.details}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={active.website}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-700 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-800 transition"
                    >
                      Visit website
                    </a>
                    <a
                      href={`mailto:${active.contact}`}
                      className="text-sm text-gray-600 hover:underline"
                    >
                      {active.contact}
                    </a>
                    <button
                      onClick={() => setActive(null)}
                      className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
