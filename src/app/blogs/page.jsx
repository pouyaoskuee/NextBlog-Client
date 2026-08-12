
async function page() {

    await new Promise(resolve => setTimeout(resolve, 3000));

    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
    const {data: {posts}} = await result.json();

    return (
        <div>
            <h2>لیست پست ها</h2>
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}

export default page;
