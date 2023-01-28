import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={392}
    height={350}
    viewBox="0 0 393 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="394" height="150" />
    <rect x="12" y="172" rx="10" ry="10" width="370" height="50" />
    <rect x="48" y="252" rx="10" ry="10" width="303" height="15" />
    <rect x="47" y="283" rx="10" ry="10" width="303" height="15" />
    <rect x="49" y="315" rx="10" ry="10" width="303" height="15" />
  </ContentLoader>
)

