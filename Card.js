const titile = "Call Family";
const description = "is a term for someone living with depression on the inside while appearing perfectly happy or content on the outside"
const date = new Date();
const dateName = date.getDate();
const monthName= date.getMonth();
const currentYear = date.getFullYear();

function Card() {
  return <div className='card'>
            <h3 className='cardTitile'>{titile}</h3>
            <p className='cardDes'>{description}</p>
            <p className='cardYear'>{dateName + "/" + monthName + "/" + currentYear}</p>
        </div>
}

export default Card;