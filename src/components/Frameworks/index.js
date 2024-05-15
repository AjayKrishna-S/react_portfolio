import './index.scss'

const Frameworks = () => {

  const handleOnMouseMove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return (
    <div className='framework-container'>
      <div className="wrapper" id='cards' onMouseMove={handleOnMouseMove}> 
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">

          </div>
            
        </div>
        <div className='card' > 
          <div className="card-border"></div>         
          <div className="card-content">

          </div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Frameworks