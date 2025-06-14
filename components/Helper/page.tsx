
//define props

import { ReactNode } from "react"

type props={
    children:ReactNode
}

const SectionHeading = ({children}:props) => {
  return (
  <h1 className="bg-[#d9ed92] w-fit text-center px-4 py-3 mx-auto text-black text-2xl
  sm:text-3xl md:text-4xl uppercase -rotate-0">{children}</h1>
  )
}

export default SectionHeading