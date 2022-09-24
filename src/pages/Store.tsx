
import {Col , Row} from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import { StoreData } from '../data/StoreData'




export const Store = () => {
	return (
		<>
		
		<Row md={2} xs={1} lg={3} className = "g-3 py-4">
			{StoreData.map((item)  => (
				<Col key = {item.id}><StoreItem {...item} /></Col>
			))}
		</Row>
		</>
	)
}