import blogImage1 from "../assets/img/blogImage1.jpg";
import blogImage2 from "../assets/img/blogImage2.jpg";
import blogImage3 from "../assets/img/blogImage3.jpg";

export const CONTEXT = {
  HOME_PAGE: "HOME_PAGE",
  BLOG_PAGE: "BLOG_PAGE"
}

export const BLOG_ROUTES = {
  WHAT_IS_SOBER_LIVING: "what-is-sober-living",
  WHY_CALL_INTERVENTIONIST: "why-call-an-interventionist",
  ARISE_COMPREHENSIVE: "arise-comprehensive-care"
}

export const CARD_DETAILS = [
  {
    header: "What is Sober Living?",
    preview: "Drug and alcohol addiction are extremely difficult to overcome, partly because of the accessibility to these substances. Alcohol can be purchased at grocery stores, restaurants, and gas stations. Thelegalization of marijuana has made the drug much easier to procure...",
    image: 1,
    route: BLOG_ROUTES.WHAT_IS_SOBER_LIVING
  },
  {
    header: "Why Call an Interventionist?",
    preview: "Addiction is the only disease that requires a self-diagnosis in order to receive successful treatment. If someone doesn’t realize they have a problem, they will not seek treatment. Even when individuals realize they have a problem, that doesn’t always mean they’re ready to make a change...",
    image: 2,
    route: BLOG_ROUTES.WHY_CALL_INTERVENTIONIST
  },
  {
    header: "Arise Comprehensive Care",
    preview: "The ARISE® Comprehensive Care with Intervention is an Evidence-Based, Best Practice Continuum.  It is an intervention model that focuses on whole-family healing.  It utilizes an invitational and transparent approach to providing the family and person of concern (PoC) with the resources necessary to facilitate healing...",
    image: 3,
    route: BLOG_ROUTES.ARISE_COMPREHENSIVE
  }
]