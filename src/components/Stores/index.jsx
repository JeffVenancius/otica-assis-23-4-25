import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './Stores.css'
import storesData from '../../data/stores.json'

const Stores = () => {
	let slider_settings = {
		dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		prevArrow: <img src="/assets/seta - site assis_prev.svg"/>,
		nextArrow: <img src="/assets/seta - site assis_next.svg"/>,
	}
	return (
		<div className="stores__container">
			<h1>NOSSAS LOJAS</h1>
			{storesData.length > 1 ? 
			<Slider {...slider_settings} className="stores__sliders">
			{storesData.map(store => {
				return (
					<div key={store['address 1'] + store['address 2']} className="stores__store">
						<img src={store['img']}/>
						<div className="stores__first--row">
							<h1>ÓTICA ASSIS</h1>
							<p>Seg. - Sáb. 09 às 19h</p>
						</div>
						<div className="stores__second--row">
							<p>{store['address 1']}</p>
							<p>{store['address 2']}</p>
						</div>
						<div className="stores__phone">
							<img src="/assets/telefone.svg"/>
							<a href={"tel:+" + store["rawphone"]}>{store["phone"]}</a>
						</div>
					</div>
				)
			})
		}
			</Slider> 
				: storesData.map(store => {
				return (
					<div key={store['address 1'] + store['address 2']} className="stores__store">
						<img src={store['img']}/>
						<div className="stores__first--row">
							<h1>ÓTICA ASSIS</h1>
							<p>Seg. - Sáb. 09 às 19h</p>
						</div>
						<div className="stores__second--row">
							<p>{store['address 1']}</p>
							<p>{store['address 2']}</p>
						</div>
						<div className="stores__phone">
							<img src="/assets/telefone.svg"/>
							<a href={"tel:+" + store["rawphone"]}>{store["phone"]}</a>
						</div>
					</div>
				)
			})
		}
			
		</div>
	)
}

export default Stores


