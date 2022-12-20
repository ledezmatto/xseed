import { Favorite, FavoriteBorder } from "@mui/icons-material";

const FavoriteIcon = (props) => {
  const { isFavorite } = props;

  if (isFavorite) {
    return <Favorite className="align-self-center opal" />;
  } else {
    return <FavoriteBorder className="align-self-center opal" />;
  }
};

export default FavoriteIcon;
