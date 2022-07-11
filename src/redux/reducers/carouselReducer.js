import { SET_CAROUSEL } from "../type/carouselType";

let initailState = {
  arrCarousel: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export const carouselReducer = (state = initailState, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrCarousel = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
