import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, FileText, Lock } from "lucide-react";

const DonatePage = () => {
  const [open, setOpen] = useState(null);

  const policies = [
    {
      id: 1,
      title: "Disclaimer",
      icon: <ShieldCheck className="text-blue-600" size={22} />,
      content:
        "Donations made to our organization are voluntary and utilized solely for charitable programs including education, healthcare, women empowerment, and community development. We ensure responsible and transparent use of all funds received.",
    },
    {
      id: 2,
      title: "Return Policy",
      icon: <RefreshCw className="text-green-600" size={22} />,
      content:
        "As donations are voluntary contributions, returns are not applicable. However, if an error occurs during the donation process, please contact us immediately so we may review the case.",
    },
    {
      id: 3,
      title: "Refund Policy",
      icon: <FileText className="text-orange-600" size={22} />,
      content:
        "Refunds are considered only in cases of duplicate or erroneous transactions. Requests must be submitted within 7 working days of the donation, along with transaction details for verification.",
    },
    {
      id: 4,
      title: "Privacy Policy",
      icon: <Lock className="text-purple-600" size={22} />,
      content:
        "We respect and protect the privacy of our donors. Personal information such as name, contact details, and payment information is kept confidential and not shared with third parties, except when legally required.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT - Donation Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-10 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Support Our Mission
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            Your contribution enables us to deliver impactful programs in
            education, healthcare, women empowerment, and environmental
            sustainability. Every donation directly supports individuals and
            communities in need, ensuring a lasting difference.
          </p>
          <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition">
            Donate Now
          </button>
        </motion.div>

        {/* RIGHT - Policies Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Policies and Guidelines
          </h2>
          {policies.map((policy) => (
            <motion.div
              key={policy.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <button
                className="flex items-center justify-between w-full p-5 text-left"
                onClick={() => setOpen(open === policy.id ? null : policy.id)}
              >
                <div className="flex items-center gap-3">
                  {policy.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {policy.title}
                  </h3>
                </div>
                <span className="text-gray-500">
                  {open === policy.id ? "−" : "+"}
                </span>
              </button>

              {open === policy.id && (
                <motion.div
                  className="px-5 pb-5 text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {policy.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DonatePage;
