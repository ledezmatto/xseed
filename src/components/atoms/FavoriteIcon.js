import { Favorite, FavoriteBorder } from "@mui/icons-material";

const FavoriteIcon = (props) => {
  const { isFavorite, onClick } = props;

  if (isFavorite) {
    return <Favorite onClick={onClick} className="align-self-center opal" />;
  } else {
    return (
      <FavoriteBorder onClick={onClick} className="align-self-center opal" />
    );
  }
};

export default FavoriteIcon;
