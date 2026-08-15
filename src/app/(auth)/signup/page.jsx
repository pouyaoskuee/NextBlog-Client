"use client"
import RHFTextField from "@/ui/RHFTextField";
import {useForm} from "react-hook-form";

// export const metadata= {
//     title:'ثبت نام'
// }

function Page() {

    const { register , handleSubmit , formState:{errors} } =  useForm()

    function onSubmit({values}){
        console.log(values)
    }

    return (
        <div className={'mx-auto w-xl space-y-6'}>
            <h2>ثبت نام</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        </div>
    );
}

export default Page;