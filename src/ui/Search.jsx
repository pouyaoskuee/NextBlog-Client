"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Search() {
    const router = useRouter();
    const pathname =usePathname()
    const searchParams = useSearchParams()

    function onSubmit(e) {
        e.preventDefault();
        const value = e.target.search.value

        const newParams = new URLSearchParams(searchParams.toString());

        if (value) {
            newParams.set("search", value);
        }else {
            newParams.delete("search");
        }

        router.push(`${pathname}?${newParams.toString()}`);
    }



  return (
    <form onSubmit={onSubmit} className="relative flex-1  ">
      <input
        key={searchParams?.get("search")}
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        defaultValue={searchParams?.get("search") || ""}
        className="textField__input py-3 text-xs shadow-xs"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
