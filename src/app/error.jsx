"use client"
function Error({ error  , reset}) {
    return (
        <div className={'flex flex-col justify-center items-center gap-2 '}>
            <p>{error.message}</p>
            <button onClick={reset}>
                بارگذاری مجدد
            </button>
        </div>
    );
}

export default Error;