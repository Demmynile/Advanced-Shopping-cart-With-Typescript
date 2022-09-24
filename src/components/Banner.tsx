import { Container} from "react-bootstrap"
import '../styles/banner.css'
import banner from '../assets/imgs/image_banner.png'

export const Banner = () => {
	return (
     <>
	 <Container>
      
	 <img src={banner} className="img-fluid" alt="banner" />

		
	 </Container>
	 </>
	)
}