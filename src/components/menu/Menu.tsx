import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';


// interface IItemLink {
//     url: string,
//     imgPath: string,
//     linkText: string
// }

// interface IMenu {
//     itemTitle: string,
//     itemLinks: IItemLink
// }



const Menu = () => {
    return (
        <div className='menu'>
            {menu.map(menuItem => (

                <div className="item" key={menuItem.id}>
                    <span className="item_title">{menuItem.itemTitle}</span>

                    {menuItem.itemLinks.map(link => (
                        <Link className='link' key={link.id} to={link.url}>
                            <img src={link.imgPath} alt="" />
                            <span className="listItem_title">{link.linkText}</span>
                        </Link>
                    ))}
                    
                </div>

            ))}
        </div>
    )
}

export default Menu;
