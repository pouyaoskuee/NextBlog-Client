"use client"
import RHFTextField from "@/ui/RHFTextField";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/authContext";
import {ArrowRightEndOnRectangleIcon} from "@heroicons/react/24/outline";

function Page() {
    const router = useRouter();

    const schema = yup.object({
        email: yup.string().email('ایمیل نامعتبر است').required('ایمیل ضروری است').min(5,'ایمیل نامعتبر است').max(40,'تعداد کارکتر بیش از حد مجاز است'),
        password: yup.string().required('رمز عبور ضروری است').min(8,'تعداد کارکتر باید بیشتر از 8im باشد').max(30,'تعداد کارکتر بیش از حد مجاز است'),
    }).required()

    const { register , handleSubmit , formState:{errors} } =  useForm({
        resolver: yupResolver(schema),
        mode:'all'
    })

    const {signIn , isLoading} = useAuth()

    async function onSubmit(values){

        await signIn(values)


    }

    return (
        <section className={'rounded-3xl border border-secondary-200 bg-secondary-0 p-6 shadow-xl shadow-primary-100/50 sm:p-8'}>
            <div className={'mb-7'}>
                <span className={'mb-4 flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary-900'}><ArrowRightEndOnRectangleIcon className={'size-5'} /></span>
                <h1 className={'text-secondary-900'}>خوش آمدید</h1>
                <p className={'mt-3 text-sm leading-7 text-secondary-500'}>برای ادامه و مدیریت نوشته‌ها، وارد حساب خود شوید.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={'space-y-5'}>
                <RHFTextField
                    name={'email'}
                    label={'ایمیل'}
                    register={register}
                    errors={errors}
                    type={'email'}
                    dir={'ltr'}
                    isRequired
                />
                <RHFTextField
                    name={'password'}
                    label={'رمز عبور'}
                    register={register}
                    errors={errors}
                    type={'password'}
                    dir={'ltr'}
                    isRequired
                />
                <Button isLoading={isLoading} className={'w-full py-3'} variant={'primary'} onClick={handleSubmit(onSubmit)}>
                    ورود
                </Button>
                <p className={'pt-1 text-center text-sm text-secondary-500'}>حساب کاربری ندارید؟ <button type={'button'} onClick={()=>router.push('/signup')} className={'font-bold text-primary-900 hover:text-primary-700'}>ثبت نام کنید</button></p>
            </form>
        </section>
    );
}

export default Page;
