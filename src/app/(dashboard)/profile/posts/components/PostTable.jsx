import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "@/app/(dashboard)/profile/posts/components/PostRow";

async function PostTable({posts}) {

    if (posts.length === 0) return <Empty resourceName={'پستی'}/>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی</th>
                <th>نویسنده</th>
                <th>تاریخ ایچاد</th>
                <th>نوع</th>
                <th>عملیات</th>
            </Table.Header>

            <Table.Body>
                {posts.map((post , index) => (<PostRow key={post.id} post={post} index={index} />))}
            </Table.Body>
        </Table>
    );
}

export default PostTable;