"use client"

import Link from "next/link"

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface NavItemProps {
    data: { label: string,
            href: string
            sublinks?: { label:string, href: string }[]
    },
    className: string 
}

export const NavItem: React.FC<NavItemProps> = ({
    data, 
    className
}) => {

    
    if (!data.sublinks) {
        return (
            <NavigationMenuItem>
                <Link href={data.href} legacyBehavior passHref>
                    <NavigationMenuLink className={ cn( navigationMenuTriggerStyle(), "hover:text-neutral-500", className) } >
                        {data.label}
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        )
    }

    return (
        <NavigationMenuItem className="relative"> 
            <NavigationMenuTrigger data-trigger={`${data.label}`} className={ className }> 
                        {data.label}
            </NavigationMenuTrigger>
             
           <NavigationMenuContent >
                <div className=" bg-white opacity-95 w-max md:max-w-[140px] lg:max-w-[160px]">
                    <ul className="pl-2 pr-8 pb-1.5 space-y-3">
                        { data.sublinks.map((sublink) => (
                            <li key={sublink.href}>
                                <Link href={sublink.href} legacyBehavior passHref>
                                    <NavigationMenuLink className="text-body  hover:text-neutral-500 ">
                                        {sublink.label}
                                    </NavigationMenuLink>
                                </Link>
                            </li>
                        ))}
                    </ul> 
                </div>
            </NavigationMenuContent>
          
        </NavigationMenuItem >  
    )
}