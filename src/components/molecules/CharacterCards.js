import BorderLine from "components/atoms/BorderLine";
import FavoriteIcon from "components/atoms/FavoriteIcon";
import TagLocation from "./TagLocation";

import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "redux/actions/types";

const CharacterCard = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favorites);
  const isFavorite = favourites?.find((character) => item.name === character);

  const onClickFavorite = () => {
    if (isFavorite) {
      dispatch({ type: REMOVE_FAVORITE, payload: item.name });
    } else {
      dispatch({ type: ADD_FAVORITE, payload: item.name });
    }
  };

  return (
    <div className="FlexContainer flex-column margin-top-30">
      <div className="FlexContainer justify-between">
        <p className="bold lineHeight05 font-13">{item.name}</p>
        <FavoriteIcon isFavorite={isFavorite} onClick={onClickFavorite} />
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
