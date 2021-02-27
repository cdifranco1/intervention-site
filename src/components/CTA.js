

const CTA = () => {
  return (
    <div className="py-2 p-5 bg-lighthouse bg-cover w-full relative flex justify-center items-center md:justify-start md:items-start" style={{height: "500px", zIndex: -1}}>
      <div className="p-3 w-full mt-7 flex flex-col items-center md:items-start max-h-full">
        <div className="p-2">
          <h1 className="text-3xl font-bold text-white my-3 tracking-wide uppercase">Intervention and Addiction Specialist</h1>
          <p className="py-2 text-lg text-white font-semibold my-1 leading-10">Addiction is a dark and lonely place that affects the entire family system. At Lighthouse Recovery Services, we will help guide your family out of the darkness of addiction into the light of recovery. What we can’t do on our own, we can do together.</p>
        </div>
        <a
          href="mailto:tylerfahey3@gmail.com?Subject=Consultation%20Request&Body=I%20would%20like%20to%20request%20a%20consultation%20from%20Tyler%20Fahey%0A%0AName%3A%0APhone%3A%0ABrief%20Description%20of%20situation%3A"
          className="px-1 py-4 mt-3 md:mt-5 block w-full sm:w-4/5 md:w-2/5 text-center text-lg rounded-full focus:outline-none focus:ring text-white font-semibold shadow-lg bg-gradient-to-b from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500">
          Free Confidential Consultation
        </a>
      </div>
    </div>
  )
}

export default CTA;