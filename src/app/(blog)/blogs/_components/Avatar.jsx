import Image from "next/image";

function Avatar({name, avatarUrl, width='26', height='26', showName = true}) {
    return (
        <div className={'flex gap-2 items-center justify-center'}>
            <Image className={'rounded-full object-cover'} src={avatarUrl || '/images/user.jpg'} alt={name || 'تصویر کاربر'} width={width} height={height} />
            {showName && <p>{name}</p>}
        </div>
    );
}

export default Avatar;
