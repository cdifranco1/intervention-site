import { Route } from "react-router-dom"

import BlogCard from "./BlogCard"
import { CARD_DETAILS, CONTEXT, BLOG_ROUTES } from "./BlogConfig"
import WhatIsSoberLiving from "./BlogPosts/WhatIsSoberLiving"
import Arise from "./BlogPosts/Arise"
import WhyCallInterventionist from "./BlogPosts/WhyCallInterventionist"




const BlogHome = () =>
  <div>
    <div className="text-3xl py-1/8 bg-lighthouse text-center font-bold text-white tracking-wide bg-cover bg-center w-full relative">
      <h1>Thoughts on intervention and recovery.</h1>
    </div>
    <Route exact path="/blog">
      <div className="px-3">
        <h1 className="text-3xl p-2 my-4 text-center border-t-2 border-b-2 border-gray-800 text-gray-800">Latest Blog Posts</h1>
        <div className="mt-5 flex flex-row flex-wrap justify-around">
          {CARD_DETAILS.map((el, i) => 
            <BlogCard cardInfo={el} key={i} />
            )}
        </div>
      </div>
    </Route>
    <div className="py-10 px-1/6 text-gray-800">
      <Route path={`/blog/${BLOG_ROUTES.WHAT_IS_SOBER_LIVING}`}>
        <WhatIsSoberLiving />
      </Route>
      <Route path={`/blog/${BLOG_ROUTES.WHY_CALL_INTERVENTIONIST}`}>
        <WhyCallInterventionist />
      </Route>
      <Route path={`/blog/${BLOG_ROUTES.ARISE_COMPREHENSIVE}`}>
        <Arise />
      </Route>
    </div>
  </div>


export default BlogHome

