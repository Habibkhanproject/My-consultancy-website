import { Box } from "@mui/material";
import React from "react";
import CountriesHeader from "../components/Countries/CountriesHeader";
import CountriesBoxes from "../components/Countries/CountriesBoxes";
import CountryDetails from "../components/Countries/Countrydetails";
import FundingOpportunitiesBox from "../components/Countries/FundingOpportunitiesBox";

const Countries = () => {
  return (
    <Box>
      <CountriesHeader />
      <CountriesBoxes />
      <CountryDetails />
      <FundingOpportunitiesBox />
    </Box>
  );
};

export default Countries;
