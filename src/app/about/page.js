import Link from "next/link"
import React from "react"

export default function page() {
  
  return (
    <div>
      this is about page
      {/* nasted link */}
      <h1><Link href={"/about/history"}>History</Link></h1>
    </div>
  )
}
