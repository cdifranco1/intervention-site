

const CTA = () => {
  return (
    <div className="mt-5 py-2 bg-hero-image bg-cover bg-center w-full relative flex justify-center items-center" style={{height: "600px"}}>
      <div className="p-3 w-4/5 absolute bg-blue-400 bg-opacity-60 rounded-md max-h-full">
        <div className="p-2">
          <h1 className="text-3xl font-semibold text-white my-3">Addiction and Mental Health Specialist</h1>
          <p className="py-2 text-lg text-white my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas blanditiis, consequatur sapiente id neque. Aliquid unde ullam, minus vitae sunt eum consequuntur, aspernatur possimus quasi est illo veritatis distinctio.</p>
        </div>
        <a
          href="mailto:tylerfahey3@gmail.com?Subject=Consultation%20Request&Body=I%20would%20like%20to%20request%20a%20consultation%20from%20Tyler%20Fahey%0A%0AName%3A%0APhone%3A%0ABrief%20Description%20of%20situation%3A"
          className="px-2 py-2 my-2 block mx-auto w-2/3 lg:w-2/5 lg:ml-2 text-center text-xl bg-green-500 hover:bg-green-700 rounded-md focus:outline-none focus:ring text-white font-semibold shadow-md">
          Request Consultation
        </a>
      </div>
    </div>
  )
}

export default CTA;