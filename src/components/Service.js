import { useRouteMatch } from "react-router-dom";

const Paragraphs = ({paragraphs}) => paragraphs.map(p => <StyledParagraph>{p}</StyledParagraph>)

const StyledParagraph = ({children}) => <p className="leading-loose text-blueGray-1 my-7">{children}</p>

const AltStyledParagraph = ({placementType, children}) =>
  <div className="my-5">
    <h1 className="text-2xl uppercase text-blueGray-1">{placementType}</h1>
    <div className="flex flex-row py-5">
      <div className="bg-gradient-to-r from-transparent to-blueGray-200 mr-3 rounded-sm shadow-sm" style={{width: "3%"}}></div>
      <p className="w-10/12 leading-relaxed text-blueGray-1">{children}</p>
    </div>
  </div>

const AltParagraphs = ({paragraphs}) => paragraphs.map(p => {
  return (
    <AltStyledParagraph placementType={p.header}>
      {Array.isArray(p.paragraph) ?
        <ul>
          {p.paragraph.map(bullet => <li className="mb-3">{bullet}</li>)}
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
      <p className="text-center px-1/12 py-8 my-5 text-lg tracking-wider"><BoldSpan>Think of a topic </BoldSpan>coming into each meeting. Picture yourself <BoldSpan>completing it. </BoldSpan>How does it <BoldSpan>feel? </BoldSpan>Who is going to hold you accountable?</p>
    </div>
  )
}

export const Service = ({serviceName, subheader, subDescription, paragraphs, imgSrc}) => {
  const { path } = useRouteMatch();

  return (
    <div className="">
      {/* header img */}
      <img src={imgSrc} className="mb-5" />
      
      <h1 className="py-3 text-3xl uppercase text-center text-blue-1">{serviceName}</h1>

      <div className="bg-gray-200 w-1/5 mx-auto" style={{height: "2px"}}></div>

      <p className="leading-loose text-blueGray-1 text-center px-1/6 py-5 text-lg tracking-wide">{subDescription}</p>
      
      <h2 className="text-xl py-5 text-center font-bold bg-gradient-to-r from-primary-blue via-primary-blue text-white tracking-wide mt-5 bg-cover bg-center w-full relative">{subheader}</h2>

      <div className="py-10 px-24">
        {path === "/services/interventions" ? 
          <Paragraphs paragraphs={paragraphs} /> :
          <AltParagraphs paragraphs={paragraphs} />
        }
      </div>

      {path === "/services/sober-coaching" && <SoberCoachClose />}

    </div>
  )
}