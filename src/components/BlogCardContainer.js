import BlogCard from "./BlogCard";
import { CARD_DETAILS, CONTEXT } from "./BlogConfig"

const BlogCardContainer = () => {
  return (
    <div className="bg-primary-gray py-10 px-1/12">
      <h2 className="text-white tracking-widest text-3xl font-sans uppercase font-semibold">Featured Blog Posts</h2>
      <div className="flex flex-col py-4 mb-2">
        {CARD_DETAILS.map((el, i) => {
          let orientation;
          if (i % 2 == 0) {
            orientation = "right";
          } else {
            orientation = "left"
          }
          return <BlogCard cardInfo={el} orientation={orientation} key={i} />;
        })}
      </div>
    </div>
  )
}

export default BlogCardContainer;
