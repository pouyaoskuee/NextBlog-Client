"use client"
import RHFTextField from "@/ui/RHFTextField";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/authContext";

// export const metadata= {
//     title:'ثبت نام'
// }

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
        <div className={'mx-auto w-md space-y-6'}>
            <h2>ثبت نام</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={'space-y-4'}>
                <RHFTextField
                    name={'fullName'}
                    label={'نام و نام خانوادگی'}
                    register={register}
                    errors={errors}
                />
                <RHFTextField
                    name={'email'}
                    label={'ایمیل'}
                    register={register}
                    errors={errors}
                    type={'email'}
                />
                <RHFTextField
                    name={'password'}
                    label={'password'}
                    register={register}
                    errors={errors}
                    type={'password'}
                />
                <Button className={'w-full'} variant={'primary'} onClick={handleSubmit(onSubmit)}>
                    ثبت نام
                </Button>
                <Button className={'w-full'} type={'button'} variant={'secondary'} onClick={()=>router.push('/signin')}>
                    ورود
                </Button>
            </form>
        </div>
    );
}

export default Page;