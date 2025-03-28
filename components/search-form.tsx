"use client";

import { Search } from "lucide-react"
import React, { useState } from "react"
import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation"


const pages = [
  { name: "Installation", path: "/getting-started/installation" },
  { name: "Project Structure", path: "/getting-started/project-structure" },
  { name: "Data Fetching", path: "/building-your-application/data-fetching" },
  { name: "Routing", path: "/building-your-application/routing" },
  // { name: "Rendering", path: "/building-your-application/rendering" },
  // { name: "Caching", path: "/building-your-application/caching" },
  // { name: "Styling", path: "/building-your-application/styling" },
  // { name: "Optimizing", path: "/building-your-application/optimizing" },
  // { name: "Configuring", path: "/building-your-application/configuring" },
  // { name: "Testing", path: "/building-your-application/testing" },
  // { name: "Authentication", path: "/building-your-application/authentication" },
  // { name: "Deploying", path: "/building-your-application/deploying" },
  // { name: "Upgrading", path: "/building-your-application/upgrading" },
  // { name: "Examples", path: "/building-your-application/examples" },
];

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const [query, setQuery] = useState("");
  const router = useRouter(); 
  const pathname = usePathname()
  const versionMatch = pathname.match(/^\/(v[\d\w.-]+)/)
  const versionPrefix = versionMatch ? `/${versionMatch[1]}` : ""

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    
  
    const pathMatch = pages.find((page) =>
      page.name.toLowerCase().includes(query.toLowerCase())
    )
  
    if (pathMatch) {
      router.push(`${versionPrefix}${pathMatch.path}`)
    } else {
      alert("No matching page found!")
    }
  }
  

  return (
    <form {...props} onSubmit={handleSubmit}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
