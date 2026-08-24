import Image from "next/image";

function Avatar({name , avatarUrl , width='26', height='26'}) {
    return (
        <div className={'flex gap-2 items-center justify-center'}>
            <Image className={'rounded-full'} src={avatarUrl || '/images/user.jpg'} alt={``} width={width} height={height} />
            <p>{name}</p>
        </div>
    );
}

export default Avatar;