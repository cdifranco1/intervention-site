import HeaderInterventionImage from "../assets/img/HeaderInterventionImage_2.jpg"
import HeaderSoberCoachingImage from "../assets/img/HeaderSoberCoachingImage_2.jpg"
import HeaderAssessmentPlacementImage from "../assets/img/HeaderAssessmentPlacementImage_2.jpg"

import  ROUTES from "./routes.json";

const SERVICE_ROUTES = ROUTES.Services; 
const BASE_ROUTE = SERVICE_ROUTES.BaseRoute;
const INTERVENTIONS_ROUTE = BASE_ROUTE + SERVICE_ROUTES.Interventions;
const TREATMENT_ROUTE = BASE_ROUTE + SERVICE_ROUTES.TreatmentAndPlacement;
const SOBER_COACHING_ROUTE = BASE_ROUTE + SERVICE_ROUTES.SoberCoaching;


export const SERVICES = [
  {
    serviceName: "Interventions",
    subheader: "Understanding the importance of Interventions",
    tag: "intervention",
    paragraphs: [
      "Addiction is a treatable, chronic and deadly disease, as defined by the American Medical Association. It is unlike any other disease in that the person suffering from the disease doesn’t realize their condition is a problem. Modern medicine doesn’t have a “cure” to addiction, which makes the process more complicated. There are a variety of self-help groups and medically assisted treatments (MAT) available for addiction but the prerequisite to treatment is the substance abuser admitting they have a problem. Typically, the addict or alcoholic is the last person to realize they are in active addiction.",
      "As the external problems start to pile up for the addicted individual – issues with relationships, the law and/or work, it becomes more apparent to loved ones that something needs to change. Most families dealing with substance abuse have exhausted their personal resources. In some cases, they’ve even utilized a variety of substance abuse professionals. Unfortunately, if the addicted individual isn’t ready to make a change, there is little that can be done, regardless of the level of care they’ve received. At Lighthouse Recovery, it is our goal to help your loved one realize that it’s time to make some changes; substance abuse doesn’t need to destroy their lives any longer.",
      "Addiction affects the family unit as a whole, there is more healing that needs to be done than simply getting the addicted individual to treatment. The intervention process is the first step for the family in their healing process. It isn’t easy to ask for help while dealing with a family crisis, especially with the negative stigma around this disease. It might not be easy to ask for help, but it’s necessary. At Lighthouse Recovery, we empower each family – helping them realize they aren’t alone and can get through this difficult time.",
      "For alcohol and drug addiction cases, we utilize the ARISE Comprehensive Care with Intervention model.  This model focuses on the family as the client, rather than simply the individual suffering from substance abuse or alcohol addiction.  Alcoholism and drug addiction are usually just the tip of the iceberg, we help address any underlying issues to ensure that the substance abuse doesn’t continue after treatment.   The ARISE model is an evidence-based, best-practice continuum. It uses an invitational, non-confrontational approach in which the family communicates in a loving and caring manner with their loved one suffering from substance abuse or alcoholism. The ARISE process results in 83% treatment entry within 3 weeks of the First Call, with further admissions resulting over the following 6 months (Landau, 2010).  Weekly meetings with the family consisting of educational topics including relapse prevention, healthy communication, setting boundaries and addiction as a disease continue while the substance abuse patient is in treatment. When the substance abuse patient leaves treatment, early recovery ambivalence issues are addressed."
    ],
    route: INTERVENTIONS_ROUTE,
    imgSrc: HeaderInterventionImage
  },
  {
    serviceName: "Treatment Placement",
    subDescription: "Whether you have a loved one suffering from an addiction or a mental health disorder, it can be difficult to navigate the large network of treatment providers. There are a variety of different categories of treatment care that vary in intensity. It is crucial to match your loved one with the appropriate level of care needed. If your loved one is in a level of care that's too intense based on where they're at, it could hinder their recovery process. If your loved one isn't at a high enough level of care, their safety can be at risk. At Lighthouse Recovery, we utilize our relationships with treatment providers across the country to provide the best possible treatment placement for your loved one.  There are countless programs throughout the United States and endless amounts of misinformation to sift through when going through the treatment placement process. Not only will we handle all of the misinformation out there, but we will also provide you with multiple treatment placement options to ensure we find the best fit for your loved one.",
    tag: "assessment",
    subheader: "What are the different levels of care?",
    route: TREATMENT_ROUTE,
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
    subDescription: "At Lighthouse Recovery our sober coaching program is designed to provide individuals with the resources and support they need to build a healthy lifestyle in recovery. Recovery is built around connection and accountability; our program offers individuals an opportunity to flourish in their own personal recovery.",
    route: SOBER_COACHING_ROUTE,
    tag: "sober",
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