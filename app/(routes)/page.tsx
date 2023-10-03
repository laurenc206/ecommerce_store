import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Hero from "@/components/ui/Hero";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured:true })
    const billboard = await getBillboard("bcacc2f0-0bf1-4d52-9ae7-e2f919ae1b9f")

    return (

        <Container>     
            <div className="space-y-10 pb-10 ">
                <Hero/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;