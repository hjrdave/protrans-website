import React from "react";
import PageContainer from "../components/page-container";
import PageContent from "../components/page-content";
import HomeSlider from "../widgets/home-slider";
import Card from 'react-bootstrap/Card';
import SEO from '../components/seo';
import './_index.scss';

export default function Page({ location }) {
  return (
    <>
      <SEO
        title={'Home'}
      />
      <PageContainer activePath={location}>
        <HomeSlider />
        <PageContent>
          <div className='homepage-floating-card'>
            <Card body>
              <div className='row d-flex justify-content-center '>
                <div className='col-10 p-4 d-md-flex justify-content-md-between'>
                  <div className='text-center p-4 p-md-0'>
                    <i className="fas fa-truck-loading"></i>
                    <p className='pt-2'>Foo Trucking</p>
                  </div>
                  <div className='text-center p-4 p-md-0'>
                    <i className="fas fa-box-check"></i>
                    <p className='pt-2'>Foo Shipping</p>
                  </div>
                  <div className='text-center p-4 p-md-0'>
                    <i className="fas fa-phone-laptop"></i>
                    <p className='pt-2'>Foo Technology</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <h1 className="pt-4">Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae
            libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus.
            In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec
            tristique faucibus ligula id malesuada. Fusce dignissim, ex non
            viverra maximus, metus est scelerisque ex, at molestie tortor dolor
            ut diam. Aliquam sodales dolor sed nunc maximus egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae
            libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus.
            In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec
            tristique faucibus ligula id malesuada. Fusce dignissim, ex non
            viverra maximus, metus est scelerisque ex, at molestie tortor dolor
            ut diam. Aliquam sodales dolor sed nunc maximus egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae
            libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus.
            In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec
            tristique faucibus ligula id malesuada. Fusce dignissim, ex non
            viverra maximus, metus est scelerisque ex, at molestie tortor dolor
            ut diam. Aliquam sodales dolor sed nunc maximus egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae
            libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus.
            In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec
            tristique faucibus ligula id malesuada. Fusce dignissim, ex non
            viverra maximus, metus est scelerisque ex, at molestie tortor dolor
            ut diam. Aliquam sodales dolor sed nunc maximus egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae
            libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus.
            In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec
            tristique faucibus ligula id malesuada. Fusce dignissim, ex non
            viverra maximus, metus est scelerisque ex, at molestie tortor dolor
            ut diam. Aliquam sodales dolor sed nunc maximus egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae
            libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus.
            In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec
            tristique faucibus ligula id malesuada. Fusce dignissim, ex non
            viverra maximus, metus est scelerisque ex, at molestie tortor dolor
            ut diam. Aliquam sodales dolor sed nunc maximus egestas.
          </p>
        </PageContent>
      </PageContainer>
    </>
  )
}
