import { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favouriteSlice";
// import iconAddFavorites from "./../../assets/img/addHeart.svg";
// import iconRemoveFavorites from "./../../assets/img/removeHeart.svg";
import css from "./AdvertItem.module.css";

function AdvertItem({ advert }) {
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
      <div className={css.cardLi}>
        <div className={css.cardWrapper}>
          <button className={css.btnAddFavorite} onClick={toggleFavorite}>
            
          </button>

          <img className={css.carImg} src={advert.img} alt="car" height={268} />
        </div>

        <div>
          <div className={css.carTitle}>
            <h2>
              {advert.make} <span>{advert.model}</span>, {advert.year}
            </h2>
            <p>{advert.rentalPrice}</p>
          </div>
          <div className={css.carInfo}>
            {city}&ensp;|&ensp;{country}&ensp;|&ensp;{advert.rentalCompany}
          </div>

          <div className={css.carInfo}>
            {advert.type}&ensp;|&ensp;{advert.make}
            &ensp;|&ensp;{Number(advert.mileage).toLocaleString("en")}
            &ensp;|&ensp;{advert.accessories[0]}
          </div>
        </div>
        <button className={css.btnLearnMore} onClick={openModalHendler}>
          Learn more
        </button>
      </div>

      {openModal && (
        <Modal closeModal={closeModalHendler} advert={advert} key={advert.id} />
      )}
    </>
  );
}

export default AdvertItem;