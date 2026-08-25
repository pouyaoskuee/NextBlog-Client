import {
    ArrowLeftStartOnRectangleIcon,
    ChatBubbleBottomCenterIcon,
    DocumentTextIcon,
    RectangleGroupIcon,
    Squares2X2Icon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useAuth} from "@/context/authContext";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <Squares2X2Icon className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/profile/users",
  },
];


export default function SideBarNavs() {

    const { logout } = useAuth();

    const logoutHandler = async () => {
        await logout;
    };

  const pathname = usePathname();
  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-3 rounded-xl px-4 py-3 text-sm font-medium text-secondary-600 transition-all duration-200 hover:bg-primary-50 hover:text-primary-900",
                {
                  "bg-primary-100 !font-bold text-primary-900 shadow-sm":
                    pathname === nav.href || (nav.href !== '/profile' && pathname.startsWith(`${nav.href}/`)),
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
        <li className={'block'}>
            <button onClick={logoutHandler}
                    className=" w-full flex items-center gap-x-3 rounded-xl px-4 py-3 text-sm font-medium text-secondary-600 transition-all duration-200 hover:bg-primary-50 hover:text-primary-900"
            >
                <ArrowLeftStartOnRectangleIcon className=" size-5" />
                <span>خروج</span>
            </button>

        </li>
    </ul>
  );
}
