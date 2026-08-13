import CustomLink from "@/ui/CustomLink";

async function CategoryList() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    const {data: {categories}} = await result.json();

    return (
        <ul className={'space-y-2'}>
            <CategoriesList href={'/'}> همه</CategoriesList>
            {categories.map(category => (
                <CategoriesList key={category._id} href={`/${category.slug}`}>{category.title}</CategoriesList>
            ))}
        </ul>
    );
}

export default CategoryList;

function CategoriesList ({href , children}) {
    return (
        <li><CustomLink href={href}>{children}</CustomLink> </li>
    )
}

