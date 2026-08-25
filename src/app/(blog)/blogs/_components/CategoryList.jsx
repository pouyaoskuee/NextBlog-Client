import CustomLink from "@/ui/CustomLink";
import {getPostsCategoriesApi} from "@/services/postSevices";

async function CategoryList() {

    let categories = [];
    try {
        const result = await getPostsCategoriesApi();
        categories = result.categories || [];
    } catch {
        categories = [];
    }


    return (
        <nav>
            <ul className={'space-y-1'}>
                <CategoriesList href={'/blogs'}> همه</CategoriesList>
                {categories.map(category => (
                    <CategoriesList key={category._id} href={`/blogs/category/${category.slug}`}>{category.title}</CategoriesList>
                ))}
            </ul>
        </nav>
    );
}

export default CategoryList;

function CategoriesList ({href , children}) {
    return (
        <li className={'rounded-xl text-secondary-600 transition-all duration-200 hover:bg-primary-50 hover:text-primary-900'}><CustomLink href={href}>{children}</CustomLink></li>
    )
}
