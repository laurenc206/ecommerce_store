"use client"

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { cn } from "@/lib/utils"

import { MenuIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { type } from "os";

interface NavLinks {
    label: string,
    href: string
    sublinks?: { label:string, href: string }[]
}

interface NavContentProps {
    data: NavLinks[],
    className: string
}



export const NavContent: React.FC<NavContentProps> = ({
    data,
    className
}) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);



    return (
        
        <ul className="md:flex md:items-center">
            {
                data.map((link) => (
                    <li key={link.href} className="md:ml-6 lg:ml-8 flex items-center">
                        <Link href={link.href}
                              key={link.href} 
                              className="font-semibold uppercase text-sm md:text-body lg:text-lg hover:text-dark-gray duration-500">
                            {link.label}
                        </Link>
                        { link.sublinks && <ChevronDown className="h-4 w-3.5 ml-.5" />}
                         
                    </li>
                ))
            }
        </ul>
    )

}