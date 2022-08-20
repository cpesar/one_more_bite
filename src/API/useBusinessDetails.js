import axios from "axios";

async function getBusinessDetails() {
  const { data } = await axios.get("https://api.yelp.com/v3/businesses/{id}");
  return data;
}

export default getBusinessDetails;
