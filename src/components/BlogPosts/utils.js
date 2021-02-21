
export const StdParagraph = ({children}) => <p className="my-5 leading-8 text-justify">{children}</p>

export const BlogHeader = ({ children }) => <h className="text-3xl tracking-wide">{ children }</h>

export const StyledH2 = ({ children }) => <h2 className="text-xl my-2 tracking-wide font-semibold">{ children }</h2>


export const StyledSection = ({ children }) => <section className="py-2">{ children }</section>

export const StyledList = ({ children }) => 
  <ul className="list-disc list-outside mt-2 pl-6">
    { children }
  </ul>

export const ListItem = ({ children }) => <li className="py-1 px-2">{ children }</li>

export const BlogList = ({ children }) => 
  <div className="my-5">
    { children }
  </div>