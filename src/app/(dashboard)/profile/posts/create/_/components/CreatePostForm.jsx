"use client"
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import RHFTextField from "@/ui/RHFTextField";
import RHFSelect from "@/ui/RHFSelect";
import Button from "@/ui/Button";
import {useCategories} from "@/app/(dashboard)/profile/posts/create/_/hooks/useCategories";
import TextField from "@/ui/TextField";

function CreatePostForm() {

    const schema = yup.object()

    const {handleSubmit  , formState:{errors} , register , reset , control} = useForm({
        mode: 'all',
        resolvers: yupResolver(schema),
    })

    const {categories , isLoading} = useCategories()
    
    function onSubmit(formState){
        console.log(formState)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'space-y-4'}>
            <RHFTextField
                name="title"
                label={'عنوان'}
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="briefText"
                label={'متن کوتاه'}
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="text"
                label={'متن'}
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="slug"
                label={'اسلاگ'}
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="readingTime"
                label={'زمان مطالعه'}
                errors={errors}
                register={register}
                isRequired
            />

            <RHFSelect
                name="category"
                label={'دسته بندی'}
                errors={errors}
                register={register}
                isRequired
                options={categories}
            />
            
            <Controller
                name={'imageCover'}
                control={control}
                rules={{required: 'عکس کاور پست الزامی میباشد'}}
                render={({field:{value , onChange , ...rest}})=>{
                    return (
                        <TextField
                            label={'عکس کاور'}
                            name={'imageCover'}
                            type={'file'}
                            isRequired
                            value={value?.fileName}
                            onChange={e => {
                                const file = e.target.files[0];
                                onChange(file)
                            }}
                            {...rest}
                        />
                    )
                }}
            />

            <Button variant={'primary'} type={'submit'}>
                ایجاد پست
            </Button>

        </form>
    );
}

export default CreatePostForm;