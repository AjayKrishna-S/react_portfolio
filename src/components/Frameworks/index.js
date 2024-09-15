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
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fnode%20js.png?alt=media&token=0b24fd4e-2b1c-402e-8587-511469d406a1" alt="node.js" />
            </div>
          </div>
          <div className='card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fexpress.png?alt=media&token=12d50160-23bf-42ff-90d5-4dca4b428a1a" alt="express.js" />
            </div>
          </div>
          <div className='card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fnext%20js.png?alt=media&token=d0afe23e-006e-4223-aed6-3b260b309425" alt="next.js" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frameworks