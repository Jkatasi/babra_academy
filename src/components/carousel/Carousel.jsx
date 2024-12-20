import React from 'react';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';

const descriptions = [
  { title: "The School View", text: "The school is still under construction." },
  { title: "Classroom Environment", text: "Spacious and well-lit classrooms." },
  { title: "Playground", text: "A large playground for outdoor activities." },
  { title: "Library", text: "Equipped with modern educational resources." },
  { title: "Science Labs", text: "State-of-the-art laboratory equipment." },
  { title: "Art Room", text: "A creative space for young minds." },
  { title: "Cafeteria", text: "A clean and hygienic cafeteria." },
  { title: "Computer Labs", text: "Advanced systems for tech-savvy learners.We are proud of our IT team that has skills and knowledge to help this young generations achieve there goals." }
];

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8
];

const CustomCarousel = () => {
  return (
    <div className='babra__carousel'>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="hover-description">
              <h4>{descriptions[index].title}</h4>
              <p>{descriptions[index].text}</p>
            </div>
            <Carousel.Caption>
              <h3>{descriptions[index].title}</h3>
              <p>{descriptions[index].text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
