import truncateText from "@/utils/truncateText";
import {toPersianNumbers} from "@/utils/toPersianNumber";
import Table from "@/ui/Table";
import {DeletePost, UpdatePost} from "@/app/(dashboard)/profile/posts/components/Buttons";

const statusStyle = {
  free: {
    label: "رایگان",
    className: "bg-emerald-50 text-emerald-700",
  },
  premium: {
    label: "پولی",
    className: "bg-primary-50 text-primary-900",
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;
  const status = statusStyle[type] || statusStyle.free;
  return (

    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td className="max-w-56 font-medium text-secondary-800">{truncateText(title || '', 30)}</td>
      <td><span className="rounded-lg bg-primary-50 px-2 py-1 text-xs text-primary-900">{category?.title || 'بدون دسته‌بندی'}</span></td>
      <td>{author?.name || '—'}</td>
      <td>{createdAt ? new Date(createdAt).toLocaleDateString('fa-IR') : '—'}</td>
      <td>
        <span className={`rounded-full px-2.5 py-1 text-xs ${status.className}`}>
          {status.label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdatePost id={post._id} />
          <DeletePost post={post} />
        </div>
      </td>
    </Table.Row>
  );
}
export default PostRow;
