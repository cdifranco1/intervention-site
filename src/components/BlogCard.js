import { Link } from "react-router-dom";
import { CONTEXT } from "./BlogConfig"


const BlogCard = ({cardInfo, orientation}) => {
  const { image, header, preview } = cardInfo;

  const blogPath = header.split(' ').map(el => el.toLowerCase()).join('-');
  const linkPath = `/blog/${blogPath}`;

  return (
    <Link to={linkPath} >
      <div className={`flex flex-col ${orientation === "right" ? "md:flex-row" : "md:flex-row-reverse"} ? w-full my-6 border-1 shadow-lg bg-white hover:shadow-xl`}>
        <div className={`
          bg-cover bg-center relative w-full py-24 md:w-1/3
          ${
            image === 1 ?
            "bg-sober-living-blog" :
            image === 2 ?
            "bg-intervention-blog" :
            "bg-blog-image-3"
          }
        ` }> 
        </div>
        <div className="p-7 md:w-2/3">
          <h1 className="uppercase text-3xl py-2 tracking-wider text-blueGray-2 font-semibold">{header}</h1>
          <p className="py-1 uppercase leading-loose text-blueGray-1">{preview}</p>
        </div>
      </div>
    </Link>
  )
}


export default BlogCard;