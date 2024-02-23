import {} from '../Modal/Modal.styled.jsx';
// import closeBtn from "../../assets/img/close.svg";

const Modal = ({ closeModal, advert }) => {
  const conditions = advert.rentalConditions.split("\n");
  const address = advert.address.split(",");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const handleOverlyClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <divOverlay  onClick={handleOverlyClick}>
      <modalContainer>
        <closeBtn onClick={closeModal}>
          {/* <img src={closeBtn} alt="close" width={14} height={14} /> */}
        </closeBtn>

        <div>
          <wrapperCar>
            <img
              src={advert.img}
              alt="car"
              width={461}
              height={248}
            />
          </wrapperCar>
        </div>

        <carTitle>
          <h2>
            {advert.make} <span> {advert.model}</span>, {advert.year}
          </h2>
        </carTitle>

        <carInfo>
          {city}&ensp;|&ensp;{country}&ensp;|&ensp;Id: {advert.id}
          &ensp;|&ensp;Year: {advert.year}&ensp;|&ensp;Type: {advert.type}
        </carInfo>

        <carInfo>
          Fuel Consumption: {advert.fuelConsumption}
          &ensp;|&ensp;Engine Size: {advert.engineSize}
        </carInfo>

        <carDescription>{advert.description}</carDescription>
        <secondaryTitle>
          Accessories and functionalities:
        </secondaryTitle>

        <accessoriesList>
          {advert.functionalities.map((functionaliti) => {
            return <li> {functionaliti} | </li>;
          })}
        </accessoriesList>
        <secondaryTitle >Rental Conditions: </secondaryTitle>

        <conditionList >
          {conditions.map((condition, index) => {
            const characters = condition.split("");
            return (
              <li key={index}>
                {characters.map((char, charIndex) => {
                  const isDigit = /^\d+$/.test(char);
                  return (
                    <span
                      key={charIndex}
                      style={{
                        color: isDigit ? "#3470FF" : "#363535",
                        fontWeight: isDigit ? 600 : 400,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </li>
            );
          })}
          <li>
            Mileage:{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>
              {Number(advert.mileage).toLocaleString("en")}
            </span>
          </li>
          <li>
            Price:{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>
              {advert.rentalPrice}
            </span>
          </li>
        </conditionList>

        <btnRentalCar
          onClick={() => {
            window.location.href = "tel:+380730000000";
          }}
        >
          Rental car
        </btnRentalCar>
      </modalContainer>
    </divOverlay>
  );
};
export default Modal;