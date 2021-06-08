import {
  AriseIntervention,
  UnderstandingAddiction,
  WhatIsSoberLiving,
  WhyCallInterventionist
} from './BlogPosts/index';

export const CONTEXT = {
  HOME_PAGE: "HOME_PAGE",
  BLOG_PAGE: "BLOG_PAGE"
}

export const BLOG_ROUTES = {
  WHAT_IS_SOBER_LIVING: "what-is-sober-living",
  WHY_CALL_INTERVENTIONIST: "why-call-an-interventionist",
  ARISE_COMPREHENSIVE: "arise-comprehensive-care",
  UNDERSTANDING_ADDICTION: "understanding-addiction"
}

export const BLOG_POSTS = [
  {
    header: "Understanding Addiction",
    preview: "What happens when my loved one is addicted? Addiction changes the structure and functioning of the human brain, it is a disease that affects individuals’ ability to make the correct choices...",
    image: "bg-understand-addiction-blog",
    route: BLOG_ROUTES.UNDERSTANDING_ADDICTION,
    featured: true,
    component: UnderstandingAddiction,
    date: new Date("2021", "05", "8")
  },
  {
    header: "What is Sober Living?",
    preview: "Drug and alcohol addiction are extremely difficult to overcome, partly because of the accessibility to these substances. Alcohol can be purchased at grocery stores, restaurants, and gas stations. The legalization of marijuana has made the drug much easier to procure...",
    image: "bg-sober-living-blog",
    route: BLOG_ROUTES.WHAT_IS_SOBER_LIVING,
    featured: false,
    component: WhatIsSoberLiving,
    date: new Date("2020", "11", "17")
  },
  {
    header: "Why Call an Interventionist?",
    preview: "Addiction is the only disease that requires a self-diagnosis in order to receive successful treatment. If someone doesn’t realize they have a problem, they will not seek treatment. Even when individuals realize they have a problem, that doesn’t always mean they’re ready to make a change...",
    image: "bg-intervention-blog",
    route: BLOG_ROUTES.WHY_CALL_INTERVENTIONIST,
    featured: true,
    component: WhyCallInterventionist,
    date: new Date("2020", "10", "05")
  },
  {
    header: "Arise Comprehensive Care",
    preview: "The ARISE® Comprehensive Care with Intervention is an Evidence-Based, Best Practice Continuum.  It is an intervention model that focuses on whole-family healing.  It utilizes an invitational and transparent approach to providing the family and person of concern (PoC) with the resources necessary to facilitate healing...",
    image: "bg-blog-image-3",
    route: BLOG_ROUTES.ARISE_COMPREHENSIVE,
    featured: true,
    component: AriseIntervention,
    date: new Date("2021", "02", "08")
  }
]
