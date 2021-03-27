import { Route, useRouteMatch } from 'react-router-dom';
import { Service } from "./Service";

import { SERVICES } from "../constants/content";

const Services = () => {
  const { path } = useRouteMatch();

  return (
    <>
        <div>
          {SERVICES.map((service, i) => 
            <Route key={`${service.serviceName} + ${i}`} path={`${service.route}`} >
              <Service
                tag={service.tag} 
                imgSrc={service.imgSrc}
                serviceName={service.serviceName} 
                subDescription={service.subDescription}
                subheader={service.subheader}
                paragraphs={service.paragraphs}
                ContentComponent={service.ContentComponent}
                />
            </Route>
          )}
        </div>
    </>
  )
}

export default Services;