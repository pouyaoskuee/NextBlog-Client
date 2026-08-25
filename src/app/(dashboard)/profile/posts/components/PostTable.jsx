import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "@/app/(dashboard)/profile/posts/components/PostRow";

function PostTable({posts = []}) {

    if (posts.length === 0) return <div className={'rounded-2xl border border-dashed border-secondary-300 bg-secondary-50 p-8 text-center'}><Empty resourceName={'پستی'}/><p className={'mt-2 text-xs text-secondary-500'}>برای شروع، اولین نوشته‌تان را ایجاد کنید.</p></div>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی</th>
                <th>نویسنده</th>
                <th>تاریخ ایجاد</th>
                <th>نوع</th>
                <th>عملیات</th>
            </Table.Header>

            <Table.Body>
                {posts.map((post , index) => (<PostRow key={post._id} post={post} index={index} />))}
            </Table.Body>
        </Table>
    );
}

export default PostTable;
