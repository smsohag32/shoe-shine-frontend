import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Card.css";
const ProductCard = ({ item }) => {
  return (
    <div>
      <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div className="w-full">
          <img
            src={item?.image}
            alt="Product"
            className="h-80 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-full">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {item?.brand}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {item?.product_name}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  {item?.price}
                </p>
              </del>
              <div className="ml-auto">
                <AddShoppingCartIcon className="mr-3" />
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="badge-overlay absolute top-0 right-0 w-full ">
            <span className="top-right badge text-white font-bold text-lg uppercase red">
              {item?.productStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
