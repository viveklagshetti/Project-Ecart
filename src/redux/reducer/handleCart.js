import { toast } from "react-toastify";
// import "react-toastify/dist/react-toastify.css";
const cart = []; //Initial state

//Handling cart
const handleCart = (state = cart, action) => {
  const product = action.payload; //storing product
  switch (action.type) {
    case "ADDCART":
      const exist = state.find((x) => x && x.id === product?.id);
      if (exist) {
        toast.error("Product already in the cart!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        return state;
      } else if (product) {
        toast.dark("Product added to cart!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      return state;

    case "DELCART":
      const exist1 = state.find((x) => x && x.id === product?.id);
      if (exist1 && exist1.qty > 1) {
        // Ensure quantity doesn't go below 1
        return state.map((x) =>
          x && x.id === product?.id ? { ...x, qty: x.qty - 1 } : x
        );
      } else {
        // If quantity is 1, remove the item from the cart
        return state.filter((x) => x && x.id !== exist1.id);
      }

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, qty: action.payload.quantity }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default handleCart;
