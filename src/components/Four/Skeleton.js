import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={304}
    height={48}
    viewBox="0 0 304 48"
    backgroundColor="#ffd6e7"
    foregroundColor="#f0d2fe"
    {...props}
  >
    <circle cx="24" cy="24" r="23" /> 
    <rect x="62" y="7" rx="5" ry="5" width="190" height="35" /> 
    <rect x="278" y="13" rx="5" ry="5" width="22" height="22" />
  </ContentLoader>
)

export default Skeleton