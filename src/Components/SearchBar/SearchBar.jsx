import { useState } from "react";
import style from "./SearchBar.module.css";
import { dogsName } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setErrorMessage("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (name === "") {
      setErrorMessage(alert("Cmon! don't forget the dog"));
    } else {
      dispatch(dogsName(name));
      setName("");
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(event) => inputHandler(event)}
          value={name}
          placeholder="Don't be afraid, search here!"
          className={style.tagsearch}
        />
        <button type="submit" onClick={(event) => handleSearch(event)} className={style.botoncito}>
          Search now!
        </button>
        {errorMessage && <p className={style.error}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SearchBar;
