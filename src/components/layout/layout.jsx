/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Header from "../header";
import Footer from "../footer";
import "./_layout.scss";

function Layout({ children }) {

  return (
    <>
      <Header siteTitle={"Protrans"} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
