import { StdParagraph, BlogHeader, BlogList, ListItem, StyledList } from "./utils";

const WhatIsSoberLiving = () =>
  <div className="py-5">
    {/* <div> */}
      <BlogHeader>
        What is Sober Living?
      </BlogHeader>

      <StdParagraph>
        Drug and alcohol addiction are extremely difficult to overcome, partly because of the accessibility to these substances.  Alcohol can be purchased at grocery stores, restaurants, and gas stations.  The legalization of marijuana has made the drug much easier to procure. In America, other illicit drugs continue to flow into our communities. Sober living homes provide accountability, structure, and a sober environment for individuals getting readjusted to living life without drugs or alcohol.
      </StdParagraph>
      {/* <img src={blogImage2} className="w-2/6" /> */}
    {/* </div> */}

    <StdParagraph>
      Accountability is instrumental to living a sober life.  Most sober living houses require their tenants to keep their rooms and common areas clean, tenants must be working or looking for a job, and they’re randomly drug tested and breathalyzed. Additionally, sober livings that follow the 12-step model typically require proof of meeting attendance.  Most addicts and alcoholics isolate when in active addiction, this tendency frequently follows the recovering addict or alcoholic into recovery.  To combat isolation, most sober livings require multiple tenants to live in each room.  The typical structure and rule list follow:
    </StdParagraph>


    <BlogList>
      <span className="font-semibold">Structure / Rules</span>
      <StyledList>
        <ListItem>Weekly House Meetings</ListItem>
        <ListItem>Curfew</ListItem>
        <ListItem>Drug/alcohol screenings</ListItem>
        <ListItem>12-step meeting attendance</ListItem>
        <ListItem>Eviction clause for relapse</ListItem>
        <ListItem>Roommates</ListItem>
        <ListItem>Chores</ListItem>
        <ListItem>Working or searching for work</ListItem>
        <ListItem>Alcohol/Drug Free Environment</ListItem>
      </StyledList>
    </BlogList>

    <StdParagraph>
      A sober living environment is a great place for someone that is coming out of a residential treatment center.  Treatment centers should be vetting the sober livings that they recommend their patients go to after their residential treatment.  Sober living provides individuals with an opportunity to get back on their feet while being held accountable.  Sober living is also an option for people that are struggling in the ‘real world’, but don’t have the time or resources to go to residential treatment.  It provides people with a sense of community and fellowship which is an integral part of recovery.  Living fees are typically paid weekly, biweekly or monthly. As previously noted, relapse can be grounds for eviction.  A live-in sober manager typically administers drug and alcohol screening.
    </StdParagraph>

    <StdParagraph>
      The bottom line is – sober living can be an excellent resource for individuals in recovery.  It offers an opportunity to live with like-minded people who are trying to better their lives.  Sober living also provides family members of the addict or alcoholic with peace-of-mind, knowing that their loved one is being held accountable.  The most valuable asset that sober living offers is a sense of community for its members.  The addict or alcoholic didn’t develop their addiction overnight, similarly, their addiction won’t be cured overnight.  It is important for people in recovery to utilize as many resources at their disposal as possible, starting with a substance-free environment to live in, with people who will be by their side through recovery.
    </StdParagraph>
  </div>

export default WhatIsSoberLiving;