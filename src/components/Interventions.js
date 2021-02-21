import { Link } from 'react-router-dom';


const Interventions = () => {
  return (
    <>
      <h2 className="text-3xl py-1/12 bg-sky text-center font-bold text-white tracking-wide mt-5 bg-cover bg-center w-full relative">Understanding the Importance of Interventions</h2>
      <div className="p-5">
        <div>
          <h1 className="text-3xl font-bold my-3">Services</h1>
          <div className="p-2">
            <Link className="text-gray-500 hover:text-gray-700" to="/interventions">Interventions</Link>
          </div>
        </div>
        <div className="p-3">
          <p className="text-lg py-4 px-2 leading-8">Addiction is a treatable, chronic and deadly disease, as defined by the American Medical Association.  It is unlike any other disease, the person suffering from the disease doesn’t realize their condition is a problem.  Modern medicine doesn’t have a “cure” to addiction, which makes the process more complicated.  There are a variety of self-help groups and medically assisted treatments (MAT) available for addiction but the prerequisite to treatment is the addicted individual admitting they have a problem.  Typically, the addict or alcoholic is the last person to realize they are in active addiction.</p>
          <p className="text-lg py-4 px-2 leading-8">As the external problems start to pile up for the addicted indiviudal – issues with relationships, the law and/or work, it becomes more apparent to loved ones that something needs to change.  Most families dealing with substance abuse have exhausted their personal resources.  In some cases, they’ve even utilized a variety of professional resources.  Unfortunately, if the addicted individual isn’t ready to make a change, there is little that can be done, regardless of the level of care they’ve received.  At Fresh Start Recovery Services, it is our goal to help your loved one realize that it’s time to get help for themselves. </p>
          <p className="text-lg py-4 px-2 leading-8">Addiction affects the family unit as a whole, there is more healing that needs to be done than simply getting the addicted individual to treatment.  The intervention process is an important step for the family in their healing process.  It isn’t easy to ask for help while dealing with a family crisis, especially with the negative stigma around this disease.  It might not be easy to ask for help, but it’s necessary.  At Fresh Start Recovery Services, we empower each family – helping them realize they aren’t alone and can get through this difficult time.  Give us a call today to start the process of healing.</p>
        </div>
      </div>
    </>
  )
}

export default Interventions;