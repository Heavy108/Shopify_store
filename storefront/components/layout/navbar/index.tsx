import { getMenu } from "@/lib/shopify"

export async function Navbar(){
    
    const menu = await getMenu("Nextjs-frontend-menu");
    console.log("from the index.ts",menu)
    return(
        <nav></nav>
    )
}