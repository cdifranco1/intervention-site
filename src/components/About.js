import headshot from "../assets/img/tyler.jpg"

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-around p-4">
        <img src={headshot} className="w-4/5 md:w-1/3 rounded-md" />
        <h2 className="text-3xl p-3 text-center md:text-left">Tyler is an addiction and intervention specialist.</h2>
      </div>
      <div className="py-5 px-1/12 my-2">
        <h2 className="text-2xl">About Tyler Fahey</h2>
        <p className="my-5">Tyler Fahey is trained in a variety of intervention modalities and practices only proven methods. His process begins at the first call, when he collects information about your loved one and the family system.  Each situation is different, he utilizes his knowledge and experience to decide which intervention method would be most effective.  This part of the process includes understanding.</p>
        <p className="my-5">Tyler comes from a family where addiction is prevalent.  His personal experiences in an alcoholic home help him relate to family members of the alcoholic or addict.  He understands what this disease can do to a family system and how much work goes into healing that family system.  He understands how time-sensitive and stressful this situation can be.</p>
        <p className="my-5">Tyler can also relate to your loved one in active addiction.  His personal story is an indication that recovery is attainable for anyone.  Tyler doesn’t necessarily believe in the old saying about addicts or alcoholics needing to hit rock bottom before they can get help.  He believes that his ‘bottom’ was raised when he was intervened on.  It’s this belief that inspires him to help families raise their loved one’s ‘bottom’ through the intervention process.</p>
        <p className="my-5">Tyler is a master at directing families through the intervention.  Preparation is the most important component, the majority of the work for an intervention is done behind the scenes.  His meticulous attention-to-detail throughout the process help the team avoid any mistakes.  After his individual assessment of the situation, he provides families with a few different appropriate treatment options.  Tyler’s calm demeanor and direct, but comforting way of communicating help him facilitate the process in an effective and efficient way.</p>
        <p className="my-5">Tyler received his Master’s in Business Administration from Loyola University Chicago before diving into the recovery space. He was a colligate football player and is an active member in A.A.  These experiences have allowed him to establish relationships with a diverse group of amazing people.  He believes that his best asset is his ability to connect with people.</p>
      </div>
    </div>
  )

}

export default About;