

const CTA = () => {
  return (
    <div className="mt-5 py-2 p-5 bg-hero-image-2 bg-cover bg-center w-full relative flex justify-center items-center md:justify-start md:items-start" style={{height: "500px"}}>
      <div className="p-3 w-full mt-7 flex flex-col items-center md:items-start max-h-full">
        <div className="p-2">
          <h1 className="text-3xl font-bold text-white my-3 tracking-wide">Addiction and Mental Health Specialist</h1>
          <p className="py-2 text-lg text-white font-semibold my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas blanditiis, consequatur sapiente id neque. Aliquid unde ullam, minus vitae sunt eum consequuntur, aspernatur possimus quasi est illo veritatis distinctio.</p>
        </div>
        <a
          href="mailto:tylerfahey3@gmail.com?Subject=Consultation%20Request&Body=I%20would%20like%20to%20request%20a%20consultation%20from%20Tyler%20Fahey%0A%0AName%3A%0APhone%3A%0ABrief%20Description%20of%20situation%3A"
          className="px-1 py-4 mt-1 md:mt-5 block w-full sm:w-4/5 md:w-2/5 text-center text-lg bg-blue-400 hover:bg-blue-600 rounded-md focus:outline-none focus:ring text-white font-semibold shadow-lg">
          Request Consultation
        </a>
      </div>
    </div>
  )
}

export default CTA;