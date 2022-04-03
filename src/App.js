// import './App.css';
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import ImageResult from "./components/imageresult/ImageResult";
import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const initialState = {
  searchText: "",
  images: [],
  amount: 15,
  apiUrl: `https://pixabay.com/api/`,
  apiKey: "26364314-9f896cfb87ae9a0d9340d39b5",
};
const theme = createTheme();

function App() {
  const [values, setValues] = useState(initialState);
  // console.log(values.searchText);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <NavBar />
        </div>
        <br />
        <div>
          <Search values={values} setValues={setValues} />
        </div>
        <br />
        <div>
          {values.images.length>0 ? <ImageResult values={values} /> : null}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
