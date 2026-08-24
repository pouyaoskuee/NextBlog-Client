import CustomLink from "@/ui/CustomLink";
import {getPostsCategoriesApi} from "@/services/postSevices";

async function CategoryList() {

    const {categories} = await getPostsCategoriesApi()


    return (
        <nav>
            <ul className={'space-y-2'}>
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
        <li className={' hover:bg-primary-900/50 hover:text-secondary-0/100 rounded-md transition-all duration-200  '}><CustomLink href={href}>{children}</CustomLink> </li>
    )
}

