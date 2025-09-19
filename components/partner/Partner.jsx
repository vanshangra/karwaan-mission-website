import React, { useState } from "react";

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

export default function Partner() {
	const [active, setActive] = useState(null);

	return (
		<section id="partners" className="w-full bg-white py-16">
			<div className="w-screen left-1/2 -translate-x-1/2 relative">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-gray-900 mb-3">
						Our Partners
					</h2>
					<p className="text-gray-600 max-w-3xl mb-8">
						We partner with NGOs, education trusts, enterprises and civic bodies
						to scale programs, share expertise and create sustainable livelihood
						pathways. Below are organisations we collaborate with closely.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{PARTNERS.map((p) => (
							<article
								key={p.id}
								className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
							>
								<div className="flex items-start gap-4">
									<div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white border">
										<img
											src={p.logo}
											alt={p.name}
											className="w-16 h-16 object-contain"
											onError={(e) => {
												e.currentTarget.src =
													"/images/partners/placeholder.png";
											}}
										/>
									</div>

									<div className="flex-1">
										<h3 className="text-lg font-semibold text-gray-900">
											{p.name}
										</h3>
										<div className="text-xs text-green-600 font-medium mb-2">
											{p.type}
										</div>
										<p className="text-sm text-gray-600 mb-3">
											{p.summary}
										</p>

										<div className="flex items-center gap-3">
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
						))}
					</div>

					{/* modal / details */}
					{active && (
						<div
							role="dialog"
							aria-modal="true"
							className="fixed inset-0 z-50 flex items-center justify-center p-6"
						>
							<div
								className="absolute inset-0 bg-black/40"
								onClick={() => setActive(null)}
							/>
							<div className="relative bg-white rounded-2xl max-w-3xl w-full p-6 shadow-xl z-10">
								<div className="flex items-start gap-4">
									<div className="w-24 h-24 flex items-center justify-center rounded-lg bg-gray-50 border">
										<img
											src={active.logo}
											alt={active.name}
											className="w-20 h-20 object-contain"
											onError={(e) => {
												e.currentTarget.src =
													"/images/partners/placeholder.png";
											}}
										/>
									</div>
									<div className="flex-1">
										<h4 className="text-2xl font-bold text-gray-900">
											{active.name}
										</h4>
										<div className="text-sm text-green-600 font-medium mb-2">
											{active.type} • {active.location}
										</div>
										<p className="text-sm text-gray-700">
											{active.details}
										</p>
									</div>
								</div>

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
					)}
				</div>
			</div>
		</section>
	);
}