import './App.css'

function App() {
	return (
		<div className='App'>
      <div className='container'>
			<header>
				<div className='header-top'>
					<div className='logo-el'></div>
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
					<div className='header-image'></div>
				</div>
			</header>

			<main>
				<section className='main-section'>
					<div>
						<h2>About</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis nobis tempore, quidem reprehenderit recusandae
							nisi aspernatur at amet dolorum!
						</p>
					</div>
					<div>
						<h2>Company</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis nobis tempore, quidem reprehenderit recusandae
							nisi aspernatur at amet dolorum!
						</p>
					</div>
					<div>
						<h2>Services</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis nobis tempore, quidem reprehenderit recusandae
							nisi aspernatur at amet dolorum!
						</p>
					</div>
				</section>
				<section className='content-section'>
					<div className='left-side'>
						<div className='content-title'>
							<h2>Content</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis nobis tempore, quidem reprehenderit
								recusandae nisi aspernatur at amet dolorum!
							</p>
						</div>
						<div className='content-sub-header'>
							<h2>Sub Header</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis nobis tempore, quidem reprehenderit
								recusandae nisi aspernatur at amet dolorum!
                Dolores corporis nobis tempore, quidem reprehenderit
								recusandae nisi aspernatur at amet dolorum!
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
