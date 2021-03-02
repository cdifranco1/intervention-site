import headshot from "../assets/img/tyler.jpg"

const About = () => {
  return (
    <div className="py-10 px-8 bg-gray-100">
      <h2 className="text-gray-700 tracking-wider text-4xl mb-7 text-center md:text-left uppercase">About Tyler and His Intervention Methodology.</h2>
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div className="mb-7 md:w-3/8 relative">
          <img src={headshot} alt={"Tyler Fahey"} className="w-full"/>
          <div className="bg-primary-gray p-4" style={{borderRadius: "0px 0px 100px 0px"}}>
            <span className="uppercase text-lg block text-white font-bold tracking-wide">Tyler Fahey</span>
            <span className="uppercase text-lg block text-white tracking-wider">Founder / Interventionist</span>
          </div>
        </div>
        <div className="md:w-7/12 leading-loose">
          {/* <h2 className="text-gray-700 tracking-wider text-4xl mb-7 text-center md:text-left uppercase">About Tyler and His Intervention Methodology.</h2> */}
          <p className="mb-5 text-blueGray-1">Tyler comes from a family where addiction is prevalent.  His personal experiences in an alcoholic home help him relate to family members of the alcoholic or addict.  He understands what this disease can do to a family system and how much work goes into healing everyone involved.  Through these experiences, he recognizes that addiction cases are time-sensitive and stressful. Tyler can also relate to your loved one in active addiction.  His personal story is an indication that recovery is possible for anyone.  Tyler doesn’t necessarily believe in the old saying about addicts or alcoholics needing to hit rock bottom before they can get 
          help.  He believes that his ‘bottom’ was raised when he was intervened on.</p>  
          
          <p className="mb-5 text-blueGray-1">It’s this belief that inspires him to help families raise their loved one’s ‘bottom’ through the intervention process. Tyler received his Master’s in Business Administration from Loyola University Chicago before diving into the recovery space. He was a collegiate football player and is an active member in A.A.  These experiences have allowed him to establish relationships with a diverse group of amazing people.  He believes that his best asset is his ability to connect with people.  Addiction is a disease that has no boundaries, it can affect everyone from CEO’s to people without jobs or homes.  Tyler believes that the opposite of addiction is connection, which is why it is vital that he can connect and relate to your loved one.</p>
        </div>
      </div>
      <div className="leading-loose">
        <p className="mb-5 text-blueGray-1">Tyler is trained in a variety of intervention modalities and practices only proven methods. His process begins at the first call, when he collects information about your loved one and the family system.  Each situation is different, he utilizes his knowledge and experience to decide which intervention method would be most effective.  This part of the process is included in his assessment, which is when he also makes a conclusion about the level of care needed for the person of concern.  </p>
        <p className="mb-5 text-blueGray-1">Tyler is a master at directing families through each intervention.  Preparation is the most important component, the majority of the work for an intervention is done behind the scenes.  His meticulous attention-to-detail throughout the process helps the intervention network avoid any mistakes.  After his individual assessment of the situation, he provides families with multiple treatment options.  Tyler’s calm demeanor and direct, but comforting way of communicating help him facilitate the process in an effective and efficient way.  </p>
      </div>
    </div>
  )

}

export default About;