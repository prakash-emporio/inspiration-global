import React from 'react';

// Extracting the common card component
const TalentProcessCard = ({ stepNumber, title, description, colorClass }) => (
  <div className="col-12 col-lg">
    <div className={`card talent-feature-section-card ${colorClass}`}>
      <div className="card-body">
        <h5 className="card-title talent-feature-section-card-header my-lg-5">
          <sup>{stepNumber}</sup> {title}
        </h5>
        <ul className="pb-lg-3">
          {description.map((item, index) => (
            <li key={index} className="card-text talent-feature-section-card-text">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Main dynamic component
const TalentFeatureSectionSubModelTwo = () => {
  const processSteps = [
    {
      stepNumber: '1',
      title: 'Position Profile',
      description: [
        'Initial organization and candidate planning',
        'Ideal candidates’ skillset requirement',
        'Profile development',
        'Joint profile review and update',
        'Profile finalized',
        'Time-table agreement',
      ],
      colorClass: 'talent-feature-section-card-color-1',
    },
    {
      stepNumber: '2',
      title: 'Research And Recruit',
      description: [
        'Development screening questions and comparison matrix',
        'Initial recruiting efforts with primary targeted companies',
        'Research secondary companies for future use',
      ],
      colorClass: 'talent-feature-section-card-color-2',
    },
    {
      stepNumber: '3',
      title: 'Present And Interview',
      description: [
        'Initial candidates presented',
        'Review and selection for interviewing',
        'Interview candidates',
        'Follow up with candidate reports and recommendations',
        'Arrange for client interviews of the candidates',
      ],
      colorClass: 'talent-feature-section-card-color-3',
    },
    {
      stepNumber: '4',
      title: 'Finalize',
      description: [
        'Conduct comprehensive reference check of final candidates',
        'Finalize selections',
        'Structure compensation package',
        'Negotiate final offer and paperwork',
        'Ongoing progress reporting and Management',
      ],
      colorClass: 'talent-feature-section-card-color-4',
    },
  ];

  return (
    <div className="container">
      <h1 className="talent-feature-section-header m-lg-5 p-5">Our Time-tested Process</h1>
      <div className="row g-0">
        {processSteps.slice(0, 2).map((step, index) => (
          <TalentProcessCard
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            colorClass={step.colorClass}
          />
        ))}
      </div>
      <div className="row g-0">
        {processSteps.slice(2).map((step, index) => (
          <TalentProcessCard
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            colorClass={step.colorClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentFeatureSectionSubModelTwo;
