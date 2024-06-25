import { Icon } from '../Icon/Icon.jsx'
import { Navigator } from '../Navigator/Navigator.jsx'
import './Header.css'

export const Header = () => {
    return (
        <header className='headerContainer'>
            <Icon imageUrl="https://static.vecteezy.com/system/resources/previews/011/860/590/original/island-logo-design-with-coconut-trees-and-sunset-vector.jpg" />
            <Navigator />
            <Icon position='right' imageUrl="https://www.svgrepo.com/show/312300/hamburger-menu.svg" />
        </header>
    )
}