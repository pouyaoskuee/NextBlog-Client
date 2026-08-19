"use server"
export async function createComments(formData) {
    console.log(formData.get('text'));
}