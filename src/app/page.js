import Button from "@/ui/Button";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div>
            <Header/>
            <main className={'flex flex-col items-center justify-center gap-10'}>
                <h1>اپلکیشن مدیریت بلاگ</h1>
                <div className={'space-y-1'}>
                    <p>جایی که قراره بتون اپلکیشن بلاگ کامل رو مدریت کنی!</p>
                    <p>بتونی بلاگ بسازی ـ کامنت بزاری و در پلنت همه اتفاق هارو رصد کنی!</p>
                </div>
                <div className={'flex gap-4'}>
                    <Button variant={'outline'}>مطالعه بلاگ ها</Button>
                    <Button variant={'primary'}>مدریت بلاگ ها</Button>
                </div>

            </main>
        </div>
    )
}
