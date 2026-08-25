"use client"
import RHFTextField from "@/ui/RHFTextField";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/authContext";
import {UserPlusIcon} from "@heroicons/react/24/outline";



function Page() {
    const router = useRouter();

    const schema = yup.object({
        fullName: yup.string().required('نام و نام خانوادگی ضروری است').min(5,'نام نامعتبر است').max(30,'تعداد کارکتر بیش از حد مجاز است'),
        email: yup.string().email('ایمیل نامعتبر است').required('ایمیل ضروری است').min(5,'ایمیل نامعتبر است').max(40,'تعداد کارکتر بیش از حد مجاز است'),
        password: yup.string().required('رمز عبور ضروری است').min(8,'تعداد کارکتر باید بیشتر از 8im باشد').max(30,'تعداد کارکتر بیش از حد مجاز است'),
    }).required()

    const { register , handleSubmit , formState:{errors} } =  useForm({
        resolver: yupResolver(schema),
        mode:'all'
    })

    const {signUp} = useAuth()

    async function onSubmit(values){

        await signUp(values)


    }

    return (
        <section className={'rounded-3xl border border-secondary-200 bg-secondary-0 p-6 shadow-xl shadow-primary-100/50 sm:p-8'}>
            <div className={'mb-7'}>
                <span className={'mb-4 flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary-900'}><UserPlusIcon className={'size-5'} /></span>
                <h1 className={'text-secondary-900'}>حساب جدید بسازید</h1>
                <p className={'mt-3 text-sm leading-7 text-secondary-500'}>چند قدم تا شروع نوشتن و مدیریت بلاگ خودتان فاصله دارید.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={'space-y-5'}>
                <RHFTextField
                    name={'fullName'}
                    label={'نام و نام خانوادگی'}
                    register={register}
                    errors={errors}
                    isRequired
                />
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
                <Button className={'w-full py-3'} variant={'primary'} onClick={handleSubmit(onSubmit)}>
                    ثبت نام
                </Button>
                <p className={'pt-1 text-center text-sm text-secondary-500'}>حساب دارید؟ <button type={'button'} onClick={()=>router.push('/signin')} className={'font-bold text-primary-900 hover:text-primary-700'}>وارد شوید</button></p>
            </form>
        </section>
    );
}

export default Page;
