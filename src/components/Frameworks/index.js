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
    <>
      <div className='framework-container'>
        <div className="wrapper" id='cards' onMouseMove={handleOnMouseMove}> 
          <div className='card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Freact.png?alt=media&token=20d3b674-7970-4bcb-a245-26a2b291e482" alt="react.js" />
            </div>
              
          </div>
          <div className='card' > 
            <div className="card-border"></div>         
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fsass.png?alt=media&token=de6ea430-d464-4e9b-82a5-a6ef57a120b6" alt="scss" />
            </div>
          </div>
          <div className='card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fbootstrap.png?alt=media&token=a7eecd28-e1ac-45b3-a86e-5fa1dd3048af" alt="bootstrap" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frameworks