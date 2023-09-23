"use client"

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavItem } from "./nav-item"
import { useEffect, useState } from "react"

interface NavLink {
    label: string,
    href: string
    sublinks?: { label:string, href: string }[]
}

interface NavContentProps {
    data: NavLink[]
}

export const NavMenu: React.FC<NavContentProps> = ({
    data
}) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <NavigationMenu className="ml-4">
            <NavigationMenuList className="md:flex">
            {data.map((link) => (
     
                <NavItem data={link} key={link.href} className="font-semibold uppercase text-sm md:text-body lg:text-lg duration-500"/>
   
            ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

