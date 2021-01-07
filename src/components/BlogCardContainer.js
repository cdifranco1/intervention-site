import blogImage1 from "../assets/img/blogImage1.jpg";
import blogImage2 from "../assets/img/blogImage2.jpg";
import BlogCard from "./BlogCard";


const cardDetails = [
  {
    header: "What is Sober Living?",
    preview: "Drug and alcohol addiction are extremely difficult to overcome, partly because of the accessibility to these substances. Alcohol can be purchased at grocery stores, restaurants, and gas stations. Thelegalization of marijuana has made the drug much easier to procure...",
    image: blogImage1
  },
  {
    header: "Why Call an Interventionist?",
    preview: "Addiction is the only disease that requires a self-diagnosis in order to receive successful treatment. If someone doesn’t realize they have a problem, they will not seek treatment. Even when individuals realize they have a problem, that doesn’t always mean they’re ready to make a change...",
    image: blogImage2
  }
]


const BlogCardContainer = () => {
  return (
    <>
      <h2 className="text-gray-700 text-3xl font-serif font-thin text-center">Latest Blog Posts</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-around py-4 mt-4 mb-2">
        {cardDetails.map(el => 
            <BlogCard cardInfo={el} />
          )}
      </div>
    </>
  )
}

export default BlogCardContainer;
