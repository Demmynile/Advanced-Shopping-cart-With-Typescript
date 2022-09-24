import item1 from '../assets/imgs/item 1.png'
import item2 from '../assets/imgs/item 2.png'
import item3 from '../assets/imgs/item 3.png'
import item4 from '../assets/imgs/item 4.png'
import item5 from '../assets/imgs/item 5.png'


type DataType = {
	id : number,
	img : string,
	name : string
}[]

export const JeweryData : DataType = [

	{
		id : 1,
		img : item1,
		name : 'EARRINGS'
	},
	{
		id : 2,
		img : item2,
		name : 'NECKLACES'
	},
	{
        id : 3 ,
		img : item3,
		name : 'BRACELETS'
	},
	{
		id : 4,
		img : item4,
		name : 'ALL RINGS'
	},
	{
		id : 5,
		img : item5,
		name : 'ENGAGEMENT'
	}
]