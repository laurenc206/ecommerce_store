import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories"
import { NavMenu } from "./nav-menu";
import MobileMenu from "./mobile-menu";

export const revalidate = 0;

const Navbar = async () => {
    const title: string = "Isabella Boriello"

    const categories = await getCategories();

    const categoryLinks = categories.map((category) => ({
        label: category.name,
        href: `/category/${category.id}`,
    }))

    const navItems= [
        {label: "Home", href: "/"},
        {label: "Work", href: "/categories", sublinks: categoryLinks},
        {label: "Blog", href: "/blog"},
        {label: "Store", href: "/store", sublinks: [{label: "link 1", href: "/link1"}, {label: "this is also a", href: "/link2"}]},
        {label: "About", href: "/about"}, 
    ]

 
    return (
        <div className="sticky top-0 z-50 lg:bg-white bg-opacity-30 ">
           
            <Container>       
                <div className="px-4 sm:px-6 lg:px-8 flex h-nav-height items-center ">
                    
                    <div className="tracking-wide text-2xl sm:text-3xl font-bold uppercase truncate hidden">
                        {title}
                    </div>

                    <div className="ml-auto">
                        <NavMenu data={navItems} />
                        <MobileMenu data={navItems} />
                        
                       
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default Navbar;