import React from "react"

interface ISubtitlesSideMenuProps {
    children: React.ReactNode
}

const SubtitlesSideMenu  = ({children}: ISubtitlesSideMenuProps): React.JSX.Element => {
  return (
    <p className={`ml-5`}>{children}</p>
  )
}

export default SubtitlesSideMenu