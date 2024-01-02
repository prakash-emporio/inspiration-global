export default function CTACard() {
  const engagementModels = [
    {
      id: 1,
      title: "Contract Staffing:",
      description: "Temporary IT professionals",
    },
    {
      id: 2,
      title: "Contract-to-Hire:",
      description: "Proven resources for direct hiring",
    },
    {
      id: 3,
      title: "Direct Hires:",
      description: "Professionals who have mastered processes and technology",
    },
    {
      id: 4,
      title: "Executive Search:",
      description: "Identifying and sourcing senior talent",
    },
    {
      id: 5,
      title: "Project Staffing:",
      description: "Complete project and talent management",
    },
  ];

  const cardItem = [
    {
      id: 1,
      title: "Position Profile",
      content: [
        "Initial organization and candidate planning",
        "Ideal candidates’ skillset requirement",
        "Profile development",
        "Joint profile review and update",
        "Profile finalized",
        "Time-table agreement",
      ],
    },
    {
      id: 2,
      title: "Research And Recruit",
      content: [
        "Development screening questions and comparison matrix",
        "Initial recruiting efforts with primary targeted companies",
        "Research secondary companies for future use",
      ],
    },
    {
      id: 3,
      title: "Present And Interview",
      content: [
        "Initial candidates presented",
        "Review and selection for interviewing",
        "Interview candidates",
        "Follow up with candidate reports and recommendations",
        "Arrange for client interviews of the candidates",
      ],
    },
    {
      id: 4,
      title: "Finalize",
      content: [
        "Conduct comprehensive reference check of final candidates",
        "Finalize selections",
        "Structure compensation package",
        "Negotiate final offer and paperwork",
        "Ongoing progress reporting and Management",
      ],
    },
  ];

  const renderEngagementModels = () => {
    return engagementModels.map((model) => (
      <div key={model.id} className="px-10">
        <h2 className="text-2xl font-bold text-lime-300">{model.title}</h2>
        <p className="text-white">{model.description}</p>
      </div>
    ));
  };

  return (
    <div className="bg-gray-900">
      <h1 className="p-10 text-5xl font-bold text-center text-white">
        Our Engagement Models
      </h1>
      <div className="flex p-10 m-5">{renderEngagementModels()}</div>
      <div>
        <h1 className="p-10 text-5xl font-bold text-center text-white">
          Our Time-tested Process
        </h1>
      </div>
      {/* Card Start Here */}
      <div className="flex justify-center ">
        <div className="w-1/3 p-5 bg-purple-400">
          <h1 className="p-5 text-4xl font-bold text-lime-300">
            <sup>1</sup>Position Profile
          </h1>
          <ul className="p-5 text-white list-disc">
            <li>Initial organization and candidate planning</li>
            <li>Ideal candidates’ skillset requirement</li>
            <li>Profile development</li>
            <li>Joint profile review and update</li>
            <li>Profile finalized</li>
            <li>Time-table agreement</li>
          </ul>
        </div>
        <div className="w-1/3 p-5 bg-purple-500">
          <h1 className="p-5 text-4xl font-bold text-lime-300 text-nowrap">
            <sup>2</sup>Research And Recruit
          </h1>
          <ul className="p-5 text-white list-disc list">
            <li>Development screening questions and comparison matrix</li>
            <li>Initial recruiting efforts with primary targeted companies</li>
            <li>Research secondary companies for future use</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-center pb-20">
        <div className="w-1/3 p-5 bg-purple-600">
          <h1 className="p-5 text-4xl font-bold text-lime-300">
            <sup>1</sup>Position Profile
          </h1>
          <ul className="p-5 text-white list-disc">
            <li>Initial organization and candidate planning</li>
            <li>Ideal candidates’ skillset requirement</li>
            <li>Profile development</li>
            <li>Joint profile review and update</li>
            <li>Profile finalized</li>
            <li>Time-table agreement</li>
          </ul>
        </div>
        <div className="w-1/3 p-5 bg-purple-800 border border-blue-800 border-dotted">
          <h1 className="p-5 text-4xl font-bold text-lime-300 text-nowrap">
            <sup>2</sup>Research And Recruit
          </h1>
          <ul className="p-5 text-white list-disc">
            <li>Initial organization and candidate planning</li>
            <li>Ideal candidates’ skillset requirement</li>
            <li>Profile development</li>
            <li>Joint profile review and update</li>
            <li>Profile finalized</li>
            <li>Time-table agreement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
