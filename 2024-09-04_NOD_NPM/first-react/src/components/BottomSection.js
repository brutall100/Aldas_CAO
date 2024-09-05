const ContentSection = () => {
    return (
      <section className='content-section'>
        <div className='left-side'>
          <div className='content-title'>
            <h2>Content</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='content-sub-header'>
            <h3>Sub Header</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit.
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
    );
  };
  
  export default ContentSection;
  