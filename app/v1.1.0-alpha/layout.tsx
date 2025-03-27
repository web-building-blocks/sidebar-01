import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export default function VersionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <SidebarInset>
        <main className="bg-background">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
