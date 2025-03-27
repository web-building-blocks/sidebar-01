"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { usePathname, useRouter } from "next/navigation"

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[]
  defaultVersion: string
}) {
  const pathname = usePathname()
  const router = useRouter()

  // ✅ 从 URL 中提取当前版本号
  const getVersionFromPath = (path: string) => {
    const match = path.match(/^\/(v[\d\w.\-]+)/)
    return match ? match[1] : defaultVersion
  }

  // ✅ 状态同步 URL 中的版本
  const [selectedVersion, setSelectedVersion] = React.useState(() => getVersionFromPath(pathname))

  // ✅ 当 URL 变化时，自动更新当前选中版本
  React.useEffect(() => {
    const version = getVersionFromPath(pathname)
    setSelectedVersion(version)
  }, [pathname])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Documentation</span>
                <span className="">{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => {
                  const currentPath = pathname.replace(/^\/v[\d\w.\-]+/, "")
                  router.push(`/v${version}${currentPath}`)
                }}
              >
                {version === selectedVersion && <Check className="mr-2" />}
                {version}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
