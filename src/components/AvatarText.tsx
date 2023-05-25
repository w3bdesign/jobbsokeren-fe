interface AvatarTextProps {
    name: string | undefined | null;
    email: string | undefined | null;
    image: string | undefined | null;
}

const AvatarText: React.FC<AvatarTextProps> = ({ name = 'Default Name', email = 'default@email.com', image = '@/assets/images/png/blank-profile-picture-973460_640.png' }) => {
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

export default AvatarText;
