import { AltStyledParagraph } from "./Service";



const RESOURCES = [
  {
    resourceName: 'Alcoholics Anonymous (AA)',
    href: 'https://www.aa.org/',
    description: 'AA Anonymous is a Fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others recover from alcoholism.'
  },
  {
    resourceName: 'Al-Anon',
    href: 'https://al-anon.org/',
    description: 'Al-anon is a 12-step recovery program for the family and friends of someone struggling with drugs and alcohol.'
  },
  {
    resourceName: 'Celebrate Recovery',
    href: 'https://www.celebraterecovery.com/',
    description: 'Celebrate Recovery is a Christian 12-step program for anyone with hurts, habits or hang-ups. Groups are open and ongoing. The program is based on 8 principals of the beatitudes.'
  },
  {
    resourceName: 'Cocaine Anonymous',
    href: 'https://ca.org/',
    description: 'Cocaine Anonymous is a Fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others recover from their addiction.'
  },
  {
    resourceName: 'Gambling Anonymous',
    href: 'http://www.gamblersanonymous.org/ga/',
    description: 'Gam-Anon is a 12 Step self-help fellowship of men and women who have been affected by the gambling problem of another.'
  },
  {
    resourceName: 'Narcotics Anonymous (NA)',
    href: 'https://na.org/',
    description: 'NA offers recovery support from the effects of addiction through working a twelve-step program.'
  },
  {
    resourceName: 'National Alliance of Mental Illness (NAMI)',
    href: 'https://www.nami.org/Home',
    description: 'NAMI, is the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.'
  },
  {
    resourceName: 'Sexual Addictions',
    href: 'https://www.sa.org',
    description: 'Sexaholics Anonymous is a fellowship of men and women who share their experience, strength, and hope with each other that they may solve their common problem and help others to recover.'
  },
  {
    resourceName: 'Depression and Bipolar Support Alliance',
    href: 'https://www.dbsalliance.org/',
    description: 'In addition to depression and bipolar support groups DBSA offers educational support, wellness options and peer support.'
  },
  {
    resourceName: 'Dual Recovery Anonymous',
    href: 'http://www.draonline.org/',
    description: 'Support for those who have both a mental health and alcohol/substance abuse condition'
  },
  {
    resourceName: 'National Eating Disorder Association',
    href: 'https://www.nationaleatingdisorders.org/',
    description: 'Eating disorders are complex illnesses that can be life-threatening. Our resources can help you understand.'
  },
  {
    resourceName: 'American Foundation For Suicide Prevention ',
    href: 'https://afsp.org/',
    description: 'AFSP has chapters around the country and offers a variety of information and support resources for those who have lost a loved one to suicide.'
  },
  {
    resourceName: 'Refugee Recovery',
    href: 'https://refugerecovery.org/',
    description: 'A mindfulness-based addiction recovery meeting that practices and utilizes Buddhist philosophy. Those struggling with addiction greatly benefit when they are able to understand the suffering that addiction has created while developing compassion for the pain they have experienced.'
  },
  {
    resourceName: 'SMART Recovery',
    href: 'https://www.smartrecovery.org/',
    description: 'SMART Recovery a self-empowering addiction recovery support group. Participants learn tools for addiction recovery based on the latest scientific research and participate in a world-wide community which includes free, self-empowering, science-based mutual help groups.'
  },
]

const StyledResource = ({resourceName, linkRef, description}) => {
  return (
    <div className="mt-5">
      <a className="text-xl uppercase text-blueGray-1 no-underline hover:cursor-pointer" href={linkRef}>{resourceName}</a>
      <div className="flex flex-row py-5">
        <div className="bg-gradient-to-r from-transparent to-blueGray-200 mr-3 rounded-sm shadow-sm" style={{ width: "25px" }}></div>
        <p className="leading-relaxed text-blueGray-1 w-10/12">{description}</p>
      </div>
    </div>
  )

}


export default () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary-blue to-blueGray-1 text-white tracking-wide mt-5 w-full relative py-20 flex flex-col items-center text-center">
        <h1 className="uppercase text-4xl py-5">Family Resources</h1>
        <div className="bg-gray-200" style={{height: "2px", width: "300px"}}></div>
        <p className="leading-loose py-5 px-1/12 text-xl">We understand how important it is to get the help that you and your loved one’s need. Below is a comprehensive list of resources for those effected by addiction and mental health.  For any additional information about resources available, please contact us by phone or email.</p>
      </div>
      <div className="py-10 px-6 md:px-24">
        {RESOURCES.map(el => {
          return (
            <StyledResource 
              resourceName={el.resourceName} 
              linkRef={el.href} 
              description={el.description} 
            />
          )
        })}
      </div>
    </div>
  )
}