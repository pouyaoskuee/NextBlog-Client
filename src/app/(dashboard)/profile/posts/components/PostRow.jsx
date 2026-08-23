import truncateText from "@/utils/truncateText";
import {toPersianNumbers} from "@/utils/toPersianNumber";
import Table from "@/ui/Table";
import {DeletePost, UpdatePost} from "@/app/(dashboard)/profile/posts/components/Buttons";

const statusStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;
  return (

    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td> {category.title}</td>
      <td>{author.name}</td>
      <td>{new Date(createdAt).toLocaleDateString('fa')}</td>
      <td>
        <span className={`badge ${statusStyle[type].className}`}>
          {statusStyle[type].label}
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
