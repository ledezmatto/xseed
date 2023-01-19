import BorderLine from "components/atoms/BorderLine";
import FavoriteIcon from "components/atoms/FavoriteIcon";
import TagLocation from "./TagLocation";

const CharacterCard = (props) => {
  const { item } = props;
  return (
    <div className="FlexContainer flex-column margin-top-30">
      <div className="FlexContainer justify-between">
        <p className="bold lineHeight05 font-13">{item.name}</p>
        <FavoriteIcon isFavorite={true} />
      </div>
      <p className="lightGray lineHeight05 font-13">
        {item.gender} | {item.birth_year}
      </p>
      <TagLocation location={item.planet} />
      <BorderLine />
    </div>
  );
};

export default CharacterCard;
