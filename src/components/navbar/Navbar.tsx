import './navbar.scss';

let iconsFirst = [
    {
        path: "/search.svg",
        alt: "",
        class: "icon" 
    },
    {
        path: "/app.svg",
        alt: "",
        class: "icon" 
    },
    {
        path: "/expand.svg",
        alt: "",
        class: "icon" 
    }
]

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.svg" alt="logo" />
            <span>LearningAdmin</span>
        </div>
        <div className="icons">
            {iconsFirst.map(icon => (
                <img key={icon.path} src={icon.path} alt="" className={icon.class} />
            ))}
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://res.cloudinary.com/misangy-dev1/image/upload/v1665472791/E-commerce/avatars/temp_image_20210601_141726_2ba2f5b9-4b97-432d-aa97-22a24e1d4959_hu6fih.jpg" alt="" />
                <span>Solo</span>
            </div>
            <img src="/setting.svg" alt="" className='icon' />
        </div>
    </div>
  )
}

export default Navbar
