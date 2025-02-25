"use client"

import * as React from "react"
import {
  AppWindowMac,
  Binary,
  Bolt,
  Bot,
  Cpu,
  Fullscreen,
  FileText,
  PieChart,
  SquareTerminal,
  Layers,
  MessageSquareCode,
  MessageSquareReply
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavRecipes } from "@/components/sidebar/nav-recipes"
import { NavDatasets } from "@/components/sidebar/nav-datasets"
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  SidebarMenuButton
} from "@/components/ui/sidebar"
import App from "next/app"

// This is sample data.
const data = {
  user: {
    name: "jxtngx",
    email: "m@example.com",
    avatar: "https://avatars.githubusercontent.com/u/26209687",
  },
  tool: 
    {
      name: "Tune Lab",
      logo: AppWindowMac,
      plan: "Enterprise",
    },
  navMain: [
    {
      title: "Llamas",
      url: "#",
      icon: Cpu,
      isActive: true,
      items: [
        {
          title: "3.1 8B Instruct",
          url: "#",
        },
        {
          title: "3.1 70B Instruct",
          url: "#",
        },
        {
          title: "3.1 8B Instruct",
          url: "#",
        },
        {
          title: "3.2 1B Instruct",
          url: "#",
        },
        {
          title: "3.2 3B Instruct",
          url: "#",
        },
        {
          title: "3.2 11B V. Instruct",
          url: "#",
        },
        {
          title: "3.2 90B V. Instruct",
          url: "#",
        },
        {
          title: "3.3 70B Instruct",
          url: "#",
        },
      ],
    },
    {
      title: "Runs",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Launch",
          url: "#",
        },
        {
          title: "Logs",
          url: "#",
        },
      ],
    },
  ],
  recipes: [
    {
      name: "Full finetuning",
      url: "#",
      icon: Fullscreen,
    },
    {
      name: "LoRA finetuning",
      url: "#",
      icon: PieChart,
    },
    {
      name: "QAT",
      url: "#",
      icon: Binary,
    },
    {
      name: "DPO",
      url: "#",
      icon: Bolt,
    },
    {
      name: "RLHF",
      url: "#",
      icon: MessageSquareCode,
    },
  ],
  datasets: [
    {
      name: "Chat",
      url: "#",
      icon: Bot,
    },
    {
      name: "Instruct",
      url: "#",
      icon: MessageSquareReply,
    },
    {
      name: "Multimodal",
      url: "#",
      icon: Layers,
    },
    {
      name: "Preference",
      url: "#",
      icon: Bolt,
    },
    {
      name: "Text completion",
      url: "#",
      icon: FileText,
    },
  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader>
      <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <data.tool.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {data.tool.name}
                </span>
              </div>
            </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavRecipes recipes={data.recipes} />
        <NavDatasets datasets={data.datasets} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
