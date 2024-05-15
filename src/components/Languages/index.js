import Loader from 'react-loaders';
import './index.scss'

const Languages = () => {

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
      <div className='languages-container'>
        <div className="wrapper" id='cards' onMouseMove={handleOnMouseMove}> 
          <div className='lan-html card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fhtml.png?alt=media&token=23f73a0a-a7f2-45c3-97d4-8055cabca073" alt="html" />
            </div>
              
          </div>
          <div className='lan-css card' > 
            <div className="card-border"></div>         
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fcss.png?alt=media&token=b95841ef-026b-4ee2-b7d0-fb28735c3a1b" alt="css" />
            </div>
          </div>
          <div className='lan-js card'>
            <div className="card-border"></div>
            <div className="card-content">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-5a704.appspot.com/o/Skills%2Fjs.png?alt=media&token=d7da2e40-50a7-4641-9309-5a08d2826dae" alt="js" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Languages