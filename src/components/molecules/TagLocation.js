import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const TagLocation = (props) => {
  const { location } = props;
  return (
    <div className="FlexContainer flex-row align-items-center tagLocation fit-content">
      <PlaceOutlinedIcon /> {location}
    </div>
  );
};

export default TagLocation;
