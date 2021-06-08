import { Route } from "react-router-dom"

import BlogCard from "./BlogCard"
import { CARD_DETAILS, CONTEXT, BLOG_ROUTES } from "./BlogConfig"
import WhatIsSoberLiving from "./BlogPosts/WhatIsSoberLiving"
import Arise from "./BlogPosts/Arise"
import WhyCallInterventionist from "./BlogPosts/WhyCallInterventionist"

import BlogCardContainer from "./BlogCardContainer";
import UnderstandingAddiction from "./BlogPosts/UnderstandingAddiction"



const BlogHome = () =>
  <div>
    <div style={{zIndex: -1}} className="text-3xl py-1/8 bg-lighthouse text-white tracking-wide bg-cover bg-center w-full relative">
      <h1 className="font-thin text-center tracking-wider">THOUGHTS ON <span className="font-bold">INTERVENTION AND RECOVERY</span></h1>
    </div>
    <Route exact path="/blog">
      <BlogCardContainer />
    </Route>
    <div className="bg-blueGray-2">
      <div className="py-10 px-1/6 text-gray-800">
        <Route path={`/blog/${BLOG_ROUTES.UNDERSTANDING_ADDICTION}`}>
          <UnderstandingAddiction />
        </Route>
        <Route path={`/blog/${BLOG_ROUTES.WHY_CALL_INTERVENTIONIST}`}>
          <WhyCallInterventionist />
        </Route>
        <Route path={`/blog/${BLOG_ROUTES.ARISE_COMPREHENSIVE}`}>
          <Arise />
        </Route>
      </div>
    </div>
  </div>


export default BlogHome

