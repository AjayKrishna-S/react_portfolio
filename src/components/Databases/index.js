import './index.scss'

const Databases = () => {
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
      <div className='database-container'>
        <div className="wrapper" id='cards' onMouseMove={handleOnMouseMove}> 
          <div className='card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fmysql.png?alt=media&token=e1d815c2-4f91-48e6-9c07-221ccd9e5de9" alt="my sql" />
            </div>
              
          </div>
          <div className='card' > 
            <div className="card-border"></div>         
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Ffirebase.png?alt=media&token=adf6bfcc-876e-4be5-a62d-999c2b571131" alt="firebase" />
            </div>
          </div>
          <div className='card' > 
            <div className="card-border"></div>         
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fmongodb.png?alt=media&token=a00f3d28-319a-46c8-b967-be6782dc99b1" alt="mongodb" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Databases