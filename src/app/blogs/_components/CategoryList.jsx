import CustomLink from "@/ui/CustomLink";
import {getPostsCategoriesApi} from "@/services/postSevices";

async function CategoryList() {

    const {categories} = await getPostsCategoriesApi()


    return (
        <ul className={'space-y-2'}>
            <CategoriesList href={'/blogs'}> همه</CategoriesList>
            {categories.map(category => (
                <CategoriesList key={category._id} href={`/blogs/category/${category.slug}`}>{category.title}</CategoriesList>
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

