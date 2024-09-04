import logo from './img/log.jpg';
import './App.css';

function App() {
	return (
		<div className='App'>
	  <div className='container'>
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

			<main>
				<section className='main-section'>
					<div>
						<h2>About</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<h2>Company</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<h2>Services</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</p>
					</div>
				</section>
				<section className='content-section'>
					<div className='left-side'>
						<div className='content-title'>
							<h2>Content</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							</p>
						</div>
						<div className='content-sub-header'>
							<h3>Sub Header</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
					<div className='right-side'>
						<h3>Navigation</h3>
						<menu>
							<ul>
								<li>Home</li>
								<li>Product</li>
								<li>Company</li>
								<li>Contact</li>
							</ul>
						</menu>
					</div>
				</section>
			</main>
	  </div>
		</div>
	)
}

export default App
