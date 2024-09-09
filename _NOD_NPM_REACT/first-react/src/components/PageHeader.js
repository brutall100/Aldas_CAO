import logo from '../img/log.jpg'

function PageHeader() {
	return (
		<header>
			<div className='header-top'>
				<div className='logo-el'>
					<img src={logo} alt='logo' />
				</div>
				<div className='nav-el'>
					<ul>
						<li>Home</li>
						<li>Product</li>
						<li>Company</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>

			<div className='header-bottom'>
				<div className='header-image'>Header Image</div>
			</div>
		</header>
	)
}

export default PageHeader
