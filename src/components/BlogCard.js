import { Link } from "react-router-dom";



const BlogCard = ({cardInfo}) => {
  const { image, header, preview, blogPath } = cardInfo;

  const linkPath = `/blogs/${blogPath}`

  return (
    <div className="w-4/5 my-4 md:w-1/3 rounded-lg border-1 border-gray-500 shadow-lg overflow-hidden">
      <img src={image} />
      <div className="p-3">
        <h1 className="capitalize text-xl font-serif py-2">{header}</h1>
        <p className="py-1 font-serif">{preview}</p>
        <Link className="py-1" to={linkPath}>Read More</Link>
      </div>
    </div>
  )
}


export default BlogCard;