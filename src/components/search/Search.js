import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import React, { useEffect } from "react";

function Search({ values, setValues }) {
  const fetchImages = () => {
    const fetchURL = `${values.apiUrl}?key=${values.apiKey}&q=${values.searchText}&image_type=photo&pretty=true&per_page=${values.amount}&safesearch=true`;
    const response = axios.get(fetchURL);
    response.then((res) => {
      if (res.data.hits.length > 0) {
        setValues({ ...values, images: res.data.hits });
      }
    });
    // console.log(fetchURL);
    // return response.data.hits
  };

  const onTextChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // fetchImages();
  };

  const onAmountChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchImages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.searchText]);

  return (
    <div>
      <TextField
        fullWidth={true}
        defaultValue={values.searchText}
        name="searchText"
        label="image search"
        onChange={onTextChange}
      />
      <Select
        name="amount"
        value={values.amount}
        label="Age"
        onChange={onAmountChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <br />
      {/* {console.log(images)} */}
    </div>
  );
}

export default React.memo(Search);
