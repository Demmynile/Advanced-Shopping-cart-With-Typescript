import logo1 from '../assets/imgs/book.jpg'
import logo2 from '../assets/imgs/computer.jpg'
import logo3 from '../assets/imgs/banana.jpg'
import logo4 from '../assets/imgs/car.jpg'

type StoreDataProps = {
	id : number,
	name : string,
	price : number,
	imgUrl : string
}[]



export const StoreData : StoreDataProps = [
	{
	  "id": 1,
	  "name": "Book",
	  "price": 10.99,
	  "imgUrl": logo1
	},
	{
	  "id": 2,
	  "name": "Computer",
	  "price": 1199,
	  "imgUrl": logo2
	},
	{
	  "id": 3,
	  "name": "Banana",
	  "price": 1.05,
	  "imgUrl": logo3
	},
	{
	  "id": 4,
	  "name": "Car",
	  "price": 14000,
	  "imgUrl": logo4
	}
  ]