import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Separator } from "../separator";

interface MobileNavItemProps {
    data: { label: string,
            href: string
            sublinks?: { label:string, href: string }[]
    },
    className: string 
}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({
    data, 
    className
}) => {

    if (! data.sublinks) {
        return (
        <li key={data.href}>
            <Link href={data.href} legacyBehavior passHref>
                <NavigationMenuLink className=" hover:text-neutral-500 font-bold">
                    {data.label}
                </NavigationMenuLink>
            </Link>
        </li>
        )
    }


    return (
        <div>
            <div className={className}>
                {data.label}
            </div>
            <Separator />
            <ul className="py-1 px-2 space-y-2">
                { data.sublinks.map((sublink) => (
                    <li key={sublink.href}>
                        <Link href={sublink.href} legacyBehavior passHref>
                            <NavigationMenuLink className= "hover:text-neutral-500">
                                {sublink.label}
                            </NavigationMenuLink>
                        </Link>
                    </li>
                ))}
            </ul> 
        </div>
    );
};

export default MobileNavItem;
