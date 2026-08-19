import Image from "next/image";

function Avatar({name , avatarUrl , width=24, height=24}) {
    return (
        <div className={'flex gap-2 items-center justify-center'}>
            <Image className={'rounded-full'} src={avatarUrl || "/images/avatar.png"} alt={``} width={width} height={height} />
            <p>{name}</p>
        </div>
    );
}

export default Avatar;