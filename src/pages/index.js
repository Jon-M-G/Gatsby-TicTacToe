import React from "react"
import { Link } from "gatsby"
import TicTacToe from "../components/TicTacToe.js"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <TicTacToe/>
  </Layout>
)

export default IndexPage
