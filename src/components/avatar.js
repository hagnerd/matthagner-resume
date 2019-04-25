import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export function Avatar({ resolutions }) {
  return <Img resolutions={resolutions}/>
}

