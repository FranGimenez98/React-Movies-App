import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  InputContainer,
  NavSearch,
  SearchIcon,
} from "./StyledSearchbar";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("error");
    } else {
      navigate("/searched/" + input);
      setInput(e.target.value = " ");
    }
  };

  const handleKeyPress = (e) => {
    var code = e.charCode || e.keyCode;
    if (code === 13) {
      e.preventDefault();
      navigate("/searched/" + input);
      setInput((e.target.value = " "));
    }
  };

  return (
    <NavSearch>
      <InputContainer>
        <Input
          placeholder="Search your movie"
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon onClick={handleSubmit} />
      </InputContainer>
    </NavSearch>
  );
};

export default Searchbar;
