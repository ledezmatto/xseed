import BorderLine from "components/atoms/BorderLine";
import FavoriteIcon from "components/atoms/FavoriteIcon";

const CharacterCard = () => {
  return (
    <div className="FlexContainer flex-column">
      <div className="FlexContainer justify-between">
        <p className="bold lineHeight05">Nombre título</p>
        <FavoriteIcon isFavorite={true} />
      </div>
      <p className="lightGray lineHeight05">Descripción</p>
      <p className="lineHeight05">Tag Location</p>
      <BorderLine />
    </div>
  );
};

export default CharacterCard;
