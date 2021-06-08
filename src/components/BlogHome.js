import { Link, Route } from "react-router-dom"

import { BLOG_POSTS, CONTEXT, BLOG_ROUTES } from "./BlogConfig"
import Arise from "./BlogPosts/Arise"
import WhyCallInterventionist from "./BlogPosts/WhyCallInterventionist"
import BlogCardContainer from "./BlogCardContainer";
import UnderstandingAddiction from "./BlogPosts/UnderstandingAddiction"
import { WhatIsSoberLiving } from "./BlogPosts";
import { ScrollToBlogTop } from "../ScrollRestore";

const BlogHome = () =>
  <>
    <div>
      <div style={{zIndex: -1}} className="text-3xl py-1/8 bg-lighthouse text-white tracking-wide bg-cover bg-center w-full relative">
        <h1 className="font-thin text-center tracking-wider">THOUGHTS ON <span className="font-bold">INTERVENTION AND RECOVERY</span></h1>
      </div>
      <div className="bg-blueGray-2">
        <div className="px-1/12">
          <Route exact path="/blog">
            <BlogCardContainer />
            <div>
            <h2 className="text-white tracking-widest text-2xl font-sans uppercase font-semibold mb-2">All Posts</h2>
              {
                BLOG_POSTS.sort((a, b) => b.date - a.date).map(el => {
                  return (
                    <div className="py-2 text-blueGray-600">
                      <Link to={`/blog/${el.route}`}>
                        <h3 className="text-xl py-2 hover:text-blueGray-800">{el.header}</h3>
                      </Link>             
                      <p className="py-1">{el.preview}</p>
                      <span>{el.date.toDateString()}</span>
                    </div>
                  )
                })
              }
            </div>
          </Route>
        </div>
        <div>
          <div className="py-10 px-1/6 text-gray-800">
            {/* {BLOG_POSTS.map(el => <Route path={`/blog/${el.route}`}>{el.component}</Route>)} */}
            <Route path={`/blog/${BLOG_ROUTES.UNDERSTANDING_ADDICTION}`}>
              <ScrollToBlogTop />
              <UnderstandingAddiction />
            </Route>
            <Route path={`/blog/${BLOG_ROUTES.WHY_CALL_INTERVENTIONIST}`}>
              <ScrollToBlogTop />
              <WhyCallInterventionist />
            </Route>
            <Route path={`/blog/${BLOG_ROUTES.ARISE_COMPREHENSIVE}`}>
              <ScrollToBlogTop />
              <Arise />
            </Route>
            <Route path={`/blog/${BLOG_ROUTES.WHAT_IS_SOBER_LIVING}`}>
              <ScrollToBlogTop />
              <WhatIsSoberLiving />
            </Route>
          </div>
        </div>
      </div>
    </div>
  </>


export default BlogHome

