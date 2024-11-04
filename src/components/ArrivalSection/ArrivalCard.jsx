import { ShopIcon } from "../SVG/IconSVG";

const ArrivalCard = ({ product, onCart, cartsData }) => {
  const { id, title, price, category, image } = product;
  const isAddToCart = cartsData.find((item) => item.id === id);

  return (
    <div className="relative h-full flex flex-col">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900 my-3">${price}</p>
      </div>
      <div className="mt-auto px-3 pb-3">
        <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10 hover:ring-1 hover:bg-slate-50 hover:text-slate-900">
          <div
            className={`flex px-3 py-2 justify-center ${
              isAddToCart
                ? "bg-red-600 hover:bg-red-700 text-white rounded-md"
                : ""
            }`}
            onClick={() => onCart(id)}
          >
            <ShopIcon />
            {isAddToCart ? "Remove from Cart" : "Add to Cart"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArrivalCard;
