
interface AvatarTextProps {
    name: string;
    email: string;
    image: string;
}

const AvatarText: React.FC<AvatarTextProps> = ({ name, email, image }) => {
    return (
        <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={image} alt="profile picture"/>
            <div className="font-medium">
                <div>{name}</div>
                <div className="text-sm text-gray-500">{email}</div>
            </div>
        </div>

    )
}

export default AvatarText