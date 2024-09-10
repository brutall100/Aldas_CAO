import '../css/Header.css'
import HeaderContent from './HeaderContent.jsx';

const Header = () => {
	return (
		<header>
			<HeaderContent 
                title = "Welcome to our site!"
                paragraph1 = "This is a paragraph."
                paragraph2 = "This is another paragraph."
                buttonText = "Click me!"
             />
		</header>
	)
}

export default Header
