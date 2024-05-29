import { useLocation } from "react-router-dom";

function GetLocation() {
  const location = useLocation();
  console.log(location);
}

export default GetLocation;
