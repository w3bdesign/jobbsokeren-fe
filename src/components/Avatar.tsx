
interface AvatarProps {
    img: string | null;
}

const Avatar: React.FC<AvatarProps> = ({img}) => {

    const defaultImage = "@/assets/images/png/blank-profile-picture-973460_640.png"; 

    return (
        <div className="relative hover:cursor-pointer">
            <img className="w-10 h-10 m-auto rounded-full" src={img || defaultImage} alt="avatar image"/>
            <span className="top-0 left-10 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
    )
}

export default Avatar
