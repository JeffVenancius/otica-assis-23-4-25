import Card from '../Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './Caroussel.css'
import { useState, useEffect } from 'react';



const Caroussel = (props) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


	let slider_settings = {
		dots: true,
		rows:2,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
		prevArrow: <img src="/assets/seta - site assis_prev.svg"/>,
		nextArrow: <img src="/assets/seta - site assis_next.svg"/>

	}

	if (screenWidth <= 1140) {
		slider_settings.slidesToShow = 2
	}

	return (
		<div className="caroussel__container">
			<div className="caroussel__title">
				<h2>{props['title']}</h2>
				<h3>{props['subtitle']}</h3>
			</div>
			<Slider {...slider_settings} className="caroussel__items">
				{props['cards'].map(e => {
					const key = e["marca"].replace(" ", "__") + e["modelo"].replace(" ", "__") + e["wppDesc"].toString().replace(" ", "__") + e["preco"]
					return <Card key={"card__" + key} values={e}/>
				})}
			</Slider>
		</div>
	)
}

export default Caroussel
