import React from "react";
import industryCardImage from "../../assets/industryCardImage.jpg";

export default function IndustryCard() {
  return (
    <div>
      <div className="w-3/6 p-10 m-10">
        <p className="p-5 m-2 text-left">
          However, there is often little time for reflection and consideration
          of what might be achievable in exploring how their organizations could
          excel if they reimagined their operations and embraced innovative
          possibilities.
        </p>
      </div>
      <div className="w-3/6 p-10 m-10">
        <p className="p-5 m-2 text-left">
          Even in the face of these challenges, public service agencies have a
          unique opportunity to cultivate resilience and foster ongoing
          evolution. By adopting intentional strategies that facilitate a
          continuous cycle of change and visionary thinking. This involves a
          dedicated focus on areas such as talent transformation, dismantling
          organizational silos to encourage collaboration, and championing
          initiatives that promote agility. These efforts empower our public
          service clients to lead with impact and continuously adapt to deliver
          more positive outcomes to the people they serve.
        </p>
      </div>
      <div className="flex justify-center px-32 py-2 m-2">
        <img src={industryCardImage} alt="industry-card-image" />
      </div>
      <div className="w-3/6 p-10 m-10">
        <p className="p-5 m-2 text-left">
          Our expertise is dedicated to evolving your organization, making it
          more productive and efficient. We not only develop and implement
          future-proof systems, processes, and technology solutions that are
          scalable and adaptable but also optimize existing legacy systems to
          maximize their longevity and efficiency.
        </p>
      </div>
      <div className="flex justify-end w-3/6 p-10 m-10 place-items-end">
        <p className="justify-end p-5 m-2 text-left">
          In today's digital and mobile-centric world, governments and public
          sector organizations must operate in an "Always On" mode. People
          increasingly expect to interact with citizen services on their own
          terms, and they demand digital technology as the means to enable these
          interactions. This involves delivering information through the
          preferred channels selected by citizens, embodying a digital-first
          mindset that empowers agencies and departments to serve their staff
          and citizens whenever, wherever, and however they desire.
        </p>
      </div>
      <div className="w-3/6 p-10 m-10">
        <p className="p-5 m-2 text-left">
          Enhancing employee engagement and streamlining business processes
          while delivering exceptional service must be the foremost priorities.
          Success hinges on embracing the latest innovations in digital
          technology, data management, artificial intelligence and machine
          learning, cloud computing, mobile solutions, and social engagement. A
          fresh perspective and a new way of executing in today's dynamic
          environment are essential for achieving these goals.
        </p>
      </div>
    </div>
  );
}
