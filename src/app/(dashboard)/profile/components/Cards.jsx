import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="group rounded-2xl border border-secondary-200 bg-secondary-0 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
      <div className="flex items-center justify-between text-secondary-600">
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary-900 transition-colors group-hover:bg-primary-900 group-hover:text-secondary-0">
          {Icon ? <Icon className="size-5" /> : null}
        </span>
      </div>
      <p className="mt-6 text-3xl font-black text-secondary-800">{value ?? 0}</p>
      <p className="mt-1 text-xs text-secondary-500">مجموع ثبت‌شده در سامانه</p>
    </div>
  );
}
