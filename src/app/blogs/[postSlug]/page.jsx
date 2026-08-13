import Image from "next/image";

async function Page({ params }) {

    const param = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${param.postSlug}`
    );

    const { data: { post } } = await res.json();

    return(
        <div className={'space-y-6 px-4'}>
            <h1>{post.title}</h1>
            <div className={'text-left space-y-2'}>
                <p>دسته بندی: {post.briefText} </p>
                <p>نویسنده: {post.author.name} </p>
            </div>

            <div className={'relative aspect-3/1 '}>
                <Image src={post.coverImageUrl} alt={post.title} fill className={'object-cover'} />
            </div>
            <p>{post.text}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias asperiores beatae est ex expedita, facere fugiat harum iste, iusto laudantium magni maxime minima molestias necessitatibus nemo nobis obcaecati officiis omnis placeat porro quisquam sapiente sint, tempora temporibus veniam vero voluptatum. A ab animi consequatur cum ea earum enim et facere facilis fugiat magnam, magni molestiae mollitia nemo odio quae quibusdam velit veritatis! Consectetur corporis deserunt dolore hic laboriosam nulla odit recusandae. Accusamus aliquam, dolore exercitationem facere maiores nisi sit! Assumenda consequatur consequuntur maiores modi nam nobis pariatur quas quasi velit, voluptate. Alias aperiam dolores molestiae possimus voluptatibus. Ab aliquid delectus ex! Accusantium amet autem esse ex excepturi, explicabo magnam molestias mollitia, reiciendis repellat totam unde velit veniam veritatis voluptate. Consequuntur corporis cupiditate, debitis dolor enim et explicabo impedit labore nihil nostrum officia omnis optio pariatur porro quasi quibusdam repellat, repellendus rerum sequi sint. A aliquam, aspernatur assumenda at atque commodi dolor esse eum facere illum ipsam laboriosam libero mollitia officia perspiciatis quasi quod quos ratione rem repellendus sequi sunt tempora ullam vero voluptatum? Amet dignissimos impedit iste iusto nesciunt nobis odit quia repellat sed unde. Asperiores aut beatae consequuntur dolore ea harum nihil quam similique. Facere fuga maxime temporibus!</p>
        </div>
    );
}

export default Page;