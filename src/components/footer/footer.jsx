import React from "react"
import "./_footer.scss"

function Footer() {
  return (
    <>
      <footer className="mt-4">
        <p className="p-4">
          © {new Date().getFullYear()}, Built with {` `}{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </>
  )
}

export default Footer
