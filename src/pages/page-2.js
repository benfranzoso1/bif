import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navigation/navbar"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoIcon from "../components/navigation/logoicon"
import Hamburger from "../components/navigation/hamburger"

const SecondPage = () => (
  <Navbar>
    <LogoIcon></LogoIcon>
    <Hamburger></Hamburger>
  </Navbar>
)

export default SecondPage
