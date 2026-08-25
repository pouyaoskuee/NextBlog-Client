"use client"
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import RHFTextField from "@/ui/RHFTextField";
import RHFSelect from "@/ui/RHFSelect";
import Button from "@/ui/Button";
import {useCategories} from "@/app/(dashboard)/profile/posts/create/_/hooks/useCategories";
import {useEffect, useState} from "react";
import Image from "next/image";
import ButtonIcon from "@/ui/ButtonIcon";
import {XMarkIcon} from "@heroicons/react/24/outline";
import FileInput from "@/ui/FileInput";
import {useCreatePost} from "@/app/(dashboard)/profile/posts/create/_/hooks/useCreatePost";
import {useRouter} from "next/navigation";
import {useEditPost} from "@/app/(dashboard)/profile/posts/create/_/hooks/useEditPost";
import {imageUrlToFile} from "@/utils/fileFormatter";

function CreatePostForm({post}) {
    const isEditSession = Boolean(post);
    const {
        title,
        text,
        slug,
        briefText,
        readingTime,
        category,
        coverImage : prevCoverImage,
        coverImageUrl: prevCoverImageUrl,

    } = post || {}
    let editValue = {}
    if (isEditSession) {
        editValue = {
            title,
            text,
            slug,
            briefText,
            readingTime,
            category: category._id,
            coverImage : prevCoverImage,
            coverImageUrl: prevCoverImageUrl,
        }
    }
    const [coverImage, setCoverImage] = useState(prevCoverImageUrl || null)
    const router = useRouter()
    const {submitPost , isLoadingPost} = useCreatePost()
    const {submitEdit, isLoadingEdit} = useEditPost()
    const {categories} = useCategories()
    const schema = yup
        .object({
            title: yup
                .string()
                .min(5, "حداقل ۵ کاراکتر را وارد کنید")
                .required("عنوان ضروری است"),
            briefText: yup
                .string()
                .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
                .required("توضیحات ضروری است"),
            text: yup
                .string()
                .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
                .required("توضیحات ضروری است"),
            slug: yup.string().required("اسلاگ ضروری است"),
            readingTime: yup
                .number()
                .positive()
                .integer()
                .required("زمان مطالعه ضروری است")
                .typeError("یک عدد را وارد کنید"),
            category: yup.string().required("دسته بندی ضروری است"),
        })
        .required();

    const {handleSubmit  , formState:{errors} , register  , control , setValue} = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: editValue,
    })



    function onSubmit(data){
        const formData = new FormData()
        for (const key in data){
            formData.append(key, data[key])
        }

        if (isEditSession){
            submitEdit({id:post._id , formData } , {
                onSuccess: ()=>{
                    router.push("/profile/posts")
                }
            })
        }else {
            submitPost(formData , {
                onSuccess: ()=>{
                    router.push("/profile/posts")
                }
            })
        }
    }


    useEffect(() => {
        if (isEditSession){
            async function fetchData() {
               const file = await imageUrlToFile(prevCoverImageUrl)
                setValue('coverImage', file)
            }

            fetchData()
        }
    }, [isEditSession, prevCoverImageUrl, setValue]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'space-y-5 rounded-2xl border border-secondary-200 bg-secondary-0 p-5 shadow-sm sm:p-7'}>
            <div className={'border-b border-secondary-100 pb-5'}>
                <h2 className={'text-xl'}>{isEditSession ? 'ویرایش پست' : 'ایجاد پست جدید'}</h2>
                <p className={'mt-2 text-sm text-secondary-500'}>اطلاعات نوشته را با دقت وارد کنید؛ بعداً هم امکان ویرایش دارید.</p>
            </div>
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
                name={'coverImage'}
                control={control}
                rules={{required: 'عکس کاور پست الزامی میباشد'}}
                render={({field:{value , onChange , ...rest}})=>{
                    return (
                        <FileInput
                            {...rest}
                            label={'عکس کاور'}
                            name={'coverImage'}
                            type={'file'}
                            value={value?.fileName}
                            onChange={e => {
                                const file = e.target.files[0];
                                onChange(file)
                                setCoverImage(URL.createObjectURL(file))
                            }}
                        />
                    )
                }}
            />

            {
                coverImage && (
                    <div className={'relative aspect-video overflow-hidden rounded-lg'}>
                        <ButtonIcon
                            type={'button'}
                            variant={'red'}
                            aria-label={'حذف تصویر کاور'}
                            className={'size-8 absolute left-2 top-2 z-10'}
                            onClick={()=>{
                                setCoverImage(null)
                                setValue('coverImage' , null)
                            }}>
                            <XMarkIcon/>
                        </ButtonIcon>
                        <Image src={coverImage} alt={'coverImage'} fill className={'object-cover'}/>
                    </div>
                )
            }

            <div className={'flex justify-end border-t border-secondary-100 pt-5'}>
            <Button isLoading={isLoadingPost || isLoadingEdit} variant={'primary'} type={'submit'} className={'min-w-32'}>
                {isEditSession ? 'ذخیره تغییرات' : 'ایجاد پست'}
            </Button>
            </div>

        </form>
    );
}

export default CreatePostForm;
