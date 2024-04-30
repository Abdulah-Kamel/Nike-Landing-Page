import { star } from "../../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div id="product" className="flex flex-1 flex-col w-full h-full max-sm:w-full cursor-pointer">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/>
        <span className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</span>
        </div>
        <h3 className="mt-2 text-xl leading-normal font-palanquin font-semibold">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard