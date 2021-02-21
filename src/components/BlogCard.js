import { Link } from "react-router-dom";
import { CONTEXT } from "./BlogConfig"


const BlogCard = ({cardInfo, orientation}) => {
  const { image, header, preview } = cardInfo;

  const blogPath = header.split(' ').map(el => el.toLowerCase()).join('-');
  const linkPath = `/blog/${blogPath}`;

  return (
    <Link to={linkPath} className={`flex ${orientation === "right" ? "flex-row" : "flex-row-reverse"} ? w-full my-4 border-1 shadow-lg overflow-hidden bg-white`}>
      <img src={image} className="object-cover w-1/3" />
      <div className="p-7 lg:w-2/3">
        <h1 className="uppercase text-3xl py-2 tracking-wider text-blueGray-2 font-semibold">{header}</h1>
        <p className="py-1 uppercase leading-loose text-blueGray-1">{preview}</p>
      </div>
    </Link>
  )
}


export default BlogCard;