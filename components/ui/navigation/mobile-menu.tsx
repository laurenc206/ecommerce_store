"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


import MobileNavItem from "./mobile-nav-item";
import { NavigationMenuViewport } from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import { X } from "lucide-react";


interface NavLink {
    label: string,
    href: string
    sublinks?: { label:string, href: string }[]
}

interface MobileMenuProps {
    data: NavLink[],
    className?: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    data,
    className
}) => {

    
    return (
        <NavigationMenu className="md:hidden block">
            <NavigationMenuList>
                <NavigationMenuItem > 
                    <NavigationMenuTrigger > 
                                <Menu className="group-data-[state=open]:hidden block"/>
                                <X className="group-data-[state=open]:block hidden"/>
                    </NavigationMenuTrigger>
                    
                    <NavigationMenuContent >
                        <div className=" bg-white opacity-95 px-4 sm:px-6 py-2 w-[300px]">
                            <ul className="pb-1.5 space-y-2">
                            {data.map((link) => (
                                <MobileNavItem data={link} className="font-bold text-body duration-500"/>
                            ))}
                            </ul> 
                        </div>
                    </NavigationMenuContent>
                    
                </NavigationMenuItem >  
            </NavigationMenuList>

            <NavigationMenuViewport/>
        </NavigationMenu>


    );
};

export default MobileMenu;
