import React from "react"
import PageBanner from '../../components/page-banner';
import Sticky from 'react-stickynode';
import LineNav from '../../components/line-nav';
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_technology.scss"

export default function Page({ location }) {
  return (
    <>
      <PageContainer activePath={location}>

        <PageBanner
          title={<>Protrans Proprietary<br />Logistics Technology</>}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <Sticky bottomBoundary=".break-sticky">
            <div className='d-none d-lg-flex'>
              <LineNav
                navItems={[
                  'Optimiz (TMS)',
                  'Smartmetrics (BI Tool)',
                  'Heat Map Visualation',
                  'Warehouse Management',
                  'Proprietary Software Benefits'
                ]}
              />
            </div>
          </Sticky>
          <div className='break-sticky' style={{ height: '2000px' }}>

          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}
