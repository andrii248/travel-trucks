import Button from "../AppHeader/Button/Button";
import css from "./CamperCard.module.css";

export default function CamperCard({ camper, handleShowMore }) {
  const onShowMore = () => {
    handleShowMore(camper.id);
  };

  return (
    <div className={css.card}>
      <img
        src={camper.gallery?.[0].thumb || ""}
        alt={camper.name}
        className={css.image}
      />
      <div className={css.info}>
        <h3>{camper.name}</h3>
        <p className={css.price}>{camper.price}</p>
        <p
          className={css.rating}
        >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
        <p className={css.location}>{camper.location}</p>
        <p className={css.description}>{camper.description}</p>
      </div>
      <Button text={"Show more"} handleClick={onShowMore} />
    </div>
  );
}
