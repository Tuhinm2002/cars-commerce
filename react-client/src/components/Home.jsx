import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/audi_a8.jpg';
import img2 from './images/red_coup_st.jpg';
import img3 from './images/lamborghini_aventidor.jpg';

function Home() {
  return (
    <Carousel >
      <Carousel.Item style={{backgroundColor:"#979b3c",maxHeight:250}}>
        <img src={img1} alt="" width={400} />
        <Carousel.Caption>
          <h3>Buy Cars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#1b3f66",maxHeight:250}}>
      <img src={img2} alt="" width={400} />
        <Carousel.Caption>
          <h3>Sell Cars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#9c321c",maxHeight:250}}>
      <img src={img3} alt="" width={400}/>
        <Carousel.Caption>
          <h3>Get the best value</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;