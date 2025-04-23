import caroussels_order from '../../../public/data/carousels_order.json'
import home from '../../../public/data/home.json'
import Caroussel from '../../components/Caroussel'
import parse from 'html-react-parser'

const DefaultHome = () => {
	const caroussels = caroussels_order.map(title => {
			if (Object.keys(home).includes(title)) {
				return (
					<>
					<Caroussel 
						key={title + "__" + home['subtitle']}
						title={title}
						subtitle={home[title]['subtitle']}
						cards={home[title]['cards']}
					/>
					{Object.keys(home[title]).includes("banner") ? parse(home[title]["banner"]) : ""}
					</>
				)
			} 
		})
	return caroussels
}

export default DefaultHome
