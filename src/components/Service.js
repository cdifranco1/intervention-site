import { useRouteMatch } from "react-router-dom";

const Paragraphs = ({paragraphs}) => paragraphs.map((p, i) => <StyledParagraph key={i}>{p}</StyledParagraph>)

const StyledParagraph = ({children}) => <p className="leading-loose text-blueGray-1 my-7">{children}</p>

export const AltStyledParagraph = ({placementType, children}) =>
  <div className="my-5">
    <h1 className="text-2xl uppercase text-blueGray-1">{placementType}</h1>
    <div className="flex flex-row py-5 w-full">
      <div className="bg-gradient-to-r from-transparent to-blueGray-100 rounded-sm shadow-sm mr-5" style={{width: "2%"}}></div>
      <p className="leading-relaxed text-blueGray-1 w-10/12">{children}</p>
    </div>
  </div>

const AltParagraphs = ({paragraphs}) => paragraphs.map(p => {
  return (
    <AltStyledParagraph placementType={p.header}>
      {Array.isArray(p.paragraph) ?
        <ul>
          {p.paragraph.map((bullet, i) => <li key={i} className="mb-3">{bullet}</li>)}
        </ul> :
        p.paragraph
      }
    </AltStyledParagraph>
  )
})

const SoberCoachClose = () => {
  const BoldSpan = ({children}) => <span className="font-bold">{children}</span>

  return (
    <div className="bg-blueGray-100 text-blueGray-1">
      <p className="text-center px-1/12 py-8 mb-10 text-lg tracking-wider"><BoldSpan>Think of a topic </BoldSpan>coming into each meeting. Picture yourself <BoldSpan>completing it. </BoldSpan>How does it <BoldSpan>feel? </BoldSpan>Who is going to hold you accountable?</p>
    </div>
  )
}

export const Service = ({serviceName, subheader, subDescription, paragraphs, imgSrc, tag}) => {
  const { path } = useRouteMatch();

  return (
    <div className="">

      <div
        className={`
          ${
            tag === "intervention" ?
            "bg-interventions" :
            tag === "sober" ?
            "bg-coaching" :
            "bg-assessment"
          }
          bg-cover mb-5 bg-center w-full relative py-1/2 sm:py-1/8
        `}
      >
      </div>

      <h1 className="py-3 text-3xl uppercase text-center text-blue-1">{serviceName}</h1>

      <div className="bg-gray-200 w-2/5 md:w-1/5 mx-auto" style={{height: "2px"}}></div>

      <p className="leading-loose text-blueGray-1 text-center px-6 md:px-1/6 py-5 text-lg tracking-wide">{subDescription}</p>
      
      {subheader && <h2 className="text-xl py-5 text-center font-bold bg-gradient-to-r from-primary-blue via-primary-blue text-white tracking-wide mt-5 bg-cover bg-center w-full relative">{subheader}</h2>}

      <div className="py-10 px-6 md:px-24">
        {path === "/services/interventions" ? 
          <Paragraphs paragraphs={paragraphs} /> :
          <AltParagraphs paragraphs={paragraphs} />
        }
      </div>

      {path === "/services/sober-coaching" && <SoberCoachClose />}

    </div>
  )
}