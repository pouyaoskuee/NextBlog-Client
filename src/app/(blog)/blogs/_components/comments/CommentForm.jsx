"use client";

import TextArea from "@/ui/TextArea";
import Button from "@/ui/Button";
import {createComments} from "@/lib/action";
import {useActionState, useEffect} from "react";
import toast from "react-hot-toast";

const initialState = {
    error: '',
    message: '',
}

const CommentForm = ({postId , parentId , onClose}) => {

    const [state  , formAction] = useActionState(createComments , initialState)


    useEffect(()=>{
        if (state?.message) {
            toast.success(state.message)
            onClose()
        }
        if (state?.error) {
            toast.error(state.error)
        }
    })

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form 
              // action={createComments.bind(null , parentId , postId)}
              action={async (formData)=>{
                  await formAction({formData , parentId , postId})
              }}
              
              className="space-y-7">
              <TextArea
                  name="text"
                  label="متن نظر"
                  isRequired
              />

              <Button variant={'primary'}>ثبت</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
