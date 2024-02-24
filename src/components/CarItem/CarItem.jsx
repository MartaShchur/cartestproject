import { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favouriteSlice.js";


const CarItem = ({ advert } )  => {
  const [openModal, setOpenModal] = useState(false);

  const address = advert.address.split(",");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const openModalHendler = () => {
    setOpenModal(true);
  };

  const closeModalHendler = () => {
    setOpenModal(false);
  };

  const handleOnClose = (e) => {
    if (e.code === "Escape") {
      closeModalHendler();
    }
  };

  window.addEventListener("keydown", handleOnClose);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.items);

  const toggleFavorite = () => {
    const isFavorite = favorites.some((favorite) => favorite.id === advert.id);

    if (isFavorite) {
      dispatch(removeFromFavorites(advert));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  return (
    <>
      <cardLi >
        <cardWrapper>
          <btnAddFavorite  onClick={toggleFavorite}>
          </btnAddFavorite>

          <img  src={advert.img} alt="car" height={268} />
        </cardWrapper>

        <div>
          <div >
            <h2>
              {advert.make} <span>{advert.model}</span>, {advert.year}
            </h2>
            <p>{advert.rentalPrice}</p>
          </div>
          <div>
            {city}&ensp;|&ensp;{country}&ensp;|&ensp;{advert.rentalCompany}
          </div>

          <div>
            {advert.type}&ensp;|&ensp;{advert.make}
            &ensp;|&ensp;{Number(advert.mileage).toLocaleString("en")}
            &ensp;|&ensp;{advert.accessories[0]}
          </div>
        </div>
        <button  onClick={openModalHendler}>
          Learn more
        </button>
      </cardLi>

      {openModal && (
        <Modal closeModal={closeModalHendler} advert={advert} key={advert.id} />
      )}
    </>
  );
}


export default CarItem;