
const Avatar = ({ image, name }) => {
    return (
        <div>
            <img
                src={image}
                alt={name}
                className="object-cover w-full h-full"
            />
        </div>
    )
}

export default Avatar
