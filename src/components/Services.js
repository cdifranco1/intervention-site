import { Link, Route, useRouteMatch } from 'react-router-dom';
import { Service } from "./Service";

import HeaderInterventionImage from "../assets/img/HeaderInterventionImage.png"
import HeaderFamilyResourcesImage from "../assets/img/HeaderFamilyResourcesImage.png"
import HeaderSoberCoachingImage from "../assets/img/HeaderSoberCoachingImage.png"
import HeaderAssessmentPlacementImage from "../assets/img/HeaderAssessmentPlacementImage.png"


const SERVICES = [
  {
    serviceName: "Interventions",
    subheader: "Understanding the importance of Interventions",
    paragraphs: [
      "Addiction is a treatable, chronic and deadly disease, as defined by the American Medical Association.  It is unlike any other disease, the person suffering from the disease doesn’t realize their condition is a problem.  Modern medicine doesn’t have a “cure” to addiction, which makes the process more complicated.  There are a variety of self-help groups and medically assisted treatments (MAT) available for addiction but the prerequisite to treatment is the addicted individual admitting they have a problem.  Typically, the addict or alcoholic is the last person to realize they are in active addiction.",
      "As the external problems start to pile up for the addicted indiviudal – issues with relationships, the law and/or work, it becomes more apparent to loved ones that something needs to change.  Most families dealing with substance abuse have exhausted their personal resources.  In some cases, they’ve even utilized a variety of professional resources.  Unfortunately, if the addicted individual isn’t ready to make a change, there is little that can be done, regardless of the level of care they’ve received.  At Fresh Start Recovery Services, it is our goal to help your loved one realize that it’s time to get help for themselves.",
      "Addiction affects the family unit as a whole, there is more healing that needs to be done than simply getting the addicted individual to treatment.  The intervention process is an important step for the family in their healing process.  It isn’t easy to ask for help while dealing with a family crisis, especially with the negative stigma around this disease.  It might not be easy to ask for help, but it’s necessary.  At Fresh Start Recovery Services, we empower each family – helping them realize they aren’t alone and can get through this difficult time.  Give us a call today to start the process of healing."
    ],
    route: "/interventions",
    imgSrc: HeaderInterventionImage
  },
  {
    serviceName: "Assessment and Placement",
    subDescription: "Whether you have a loved one suffering from an addiction or mental health disorder, it can be difficult to navigate the large network of treatment providers. There are a variety of different categories of treatment care that vary in intensity. It is crucial to match your loved one with the appropriate level of care needed. If your loved one is in a level of care that's too intense based on where they're at, it could hinder their recover process. If your loved one isn't at a high enough level of care, their safety can be at risk. At Lighthouse Recovery Services, we utilize an assessment process that will help us create an individualized treatment plan, make recommendations, and secure treatment care.",
    subheader: "What are the different levels of care?",
    route: "/assessment-and-placement",
    paragraphs: [
      {
        header: "Medically Supervised Detox",
        paragraph: "Medically supervised detox is necessary to comfortably remove toxins from the body. The clinical team can address any medical risks associated with abstinence from drugs or alcohol.",
      },
      {
        header: "Intensive Outpatient",
        paragraph: "Intensive outpatient provides individuals with the chance to receive therapeutic support, learn coping skills, and integrate into the recovery community.  Clients typically meet at a facility 1-3 times a week over the duration of their treatment process.  Intensive Outpatient usually includes both group and individual care.",
      },
      {
        header: "Residential Treatment",
        paragraph: "Residential treatment offers 24-hour care. Clients live at the treatment facility while engaging in their treatment process.  They are therapeutically supported while being fully integrated into the recovery community.  Typical stays are between 30-90 days.",
      },
      {
        header: "Dual Diagnosis",
        paragraph: "Dual diagnosis treatment programs address any underlying conditions that are fueling the addiction, such as anxiety, bipolar disorder, depression, and trauma. Finding a reputable dual diagnosis program is crucial if recommended following an assessment.",
      },
      {
        header: "Sober Living",
        paragraph: "Sober living is designed to provide accountability for people leaving residential treatment, involved in outpatient programs, or those that continue to relapse. Sober living is designed to help addicts and alcoholics bridge the gap between treatment and autonomous living.  Drug and alcohol screening, chores, and a set curfew are typical rules.",
      },
      {
        header: "Transitional Living",
        paragraph: "Transitional living is another less-common treatment option for individuals that need a higher level of care than sober living but are ready to move out of residential treatment. Transitional Living includes a clinical component and less freedom than a sober living. Some residential treatment centers have their own transitional living programs allowing the clients to have a smooth integration into the new level of care.",
      }
    ],
    imgSrc: HeaderAssessmentPlacementImage
  },
  {
    serviceName: "Sober Coaching",
    subDescription: "At Lighthouse Recovery Services, our sober coaching program is designed to provide individuals with the resources and support they need to build a healthy ligestyle in recovery. Recovery is build around connection and accountability; our program offers individuals an opportunity to flourish in their own personal recovery.",
    subheader: "What are the different levels of care?",
    route: "/sober-coaching",
    paragraphs: [
      {
        header: "Who can benefit from sober coaching?",
        paragraph: [
          "Those beginning their journey in recovery",
          "Individuals who have recently been discharged from treatment", 
          "People with a history of relapse"
        ]
      },
      {
        header: "How does sober coaching work?",
        paragraph: [
          "Clients meet in-person or virtually with a recovery coach up to three times a week for 1-2 hours",
          "Sober coaches provide daily support by text or phone", 
          "Coaches provide life and recovery skill coaching by establishing goals",
          "Weekly email updates are included regarding client's progress"
        ]
      },
    ],
    imgSrc: HeaderSoberCoachingImage
  }
]


const Services = () => {
  const { path } = useRouteMatch();

  return (
    <>
      {/* <h2 className="text-3xl py-1/12 bg-sky text-center font-bold text-white tracking-wide mt-5 bg-cover bg-center w-full relative">Understanding the Importance of Interventions</h2>
      <div className="p-5">
        <div>
          <h1 className="text-3xl font-bold my-3">Services</h1>
          <div className="p-2">
            <Link className="text-gray-500 hover:text-gray-700" to="/interventions">Interventions</Link>
          </div>
        </div> */}
        <div>
          {SERVICES.map(service => 
            <Route path={`${path}${service.route}`} >
              <Service 
                imgSrc={service.imgSrc}
                serviceName={service.serviceName} 
                subDescription={service.subDescription}
                subheader={service.subheader}
                paragraphs={service.paragraphs}
                ContentComponent={service.ContentComponent}
                />
            </Route>
          )}
        </div>
    </>
  )
}

export default Services;