"use client";

import TextArea from "@/ui/TextArea";
import Button from "@/ui/Button";
import {createComments} from "@/app/lib/action";


const CommentForm = () => {

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form action={createComments}  className="space-y-7">
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
