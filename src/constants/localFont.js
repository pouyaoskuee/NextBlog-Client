import LocalFont from "next/font/local"

const vazirFont = LocalFont({
    src: [
        {
            path: "../../public/fonts/Vazir-Thin.woff2",
            weight: '100',
            style:'normal',
        },
        {
            path: "../../public/fonts/Vazir-Light.woff2",
            weight: '300',
            style:'normal',
        },
        {
            path: "../../public/fonts/Vazir.woff2",
            weight: '400',
            style:'normal',
        },
        {
            path: "../../public/fonts/Vazir-Medium.woff2",
            weight: '500',
            style:'normal',
        },
        {
            path: "../../public/fonts/Vazir-Bold.woff2",
            weight: '700',
            style:'normal',
        },
        {
            path: "../../public/fonts/Vazirmatn-Black.woff2",
            weight: '900',
            style:'normal',
        },
    ],
    variable:"--font-vazir",
    style:'normal',
    display:"block",
})

export default vazirFont