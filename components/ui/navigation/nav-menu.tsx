"use client"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavItem } from "./nav-item"
import { useEffect, useState } from "react"
import MobileMenu from "./mobile-menu"

interface NavLink {
    label: string,
    href: string
    sublinks?: { label:string, href: string }[]
}

interface NavMenuProps {
    data: NavLink[]
}

export const NavMenu: React.FC<NavMenuProps> = ({
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
        <NavigationMenu className="md:flex hidden">
            <NavigationMenuList > 
                
                {data.map((link) => (
                    <NavItem data={link} key={link.href} className="font-semibold uppercase text-sm md:text-body lg:text-lg duration-500"/>
                ))}
                
            </NavigationMenuList>
        </NavigationMenu>
    )
}

