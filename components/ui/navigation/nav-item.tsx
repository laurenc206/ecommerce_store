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
            <NavigationMenuTrigger className={ className }> 
                        {data.label}
            </NavigationMenuTrigger>
             
           <NavigationMenuContent>
                <ul className="pl-2 pr-8 pb-1.5 space-y-3 ">
                    { data.sublinks.map((sublink) => (
                        <li key={sublink.href}>
                            <Link href={sublink.href} legacyBehavior passHref>
                                <NavigationMenuLink className="text-body  hover:text-neutral-500 truncate">
                                    {sublink.label}
                                </NavigationMenuLink>
                            </Link>
                        </li>
                    ))}
                </ul> 
            </NavigationMenuContent>

            <NavigationMenuViewport />
        </NavigationMenuItem >  
    )
}