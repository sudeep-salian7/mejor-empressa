
const SideBarCard = ({data, index}) => {
    
    return (
        <a href={`#${index}`} key={index} className="py-4 ">
             {data}
        </a>
    )
}

export default SideBarCard;