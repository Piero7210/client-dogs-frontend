import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDogs, getTemperaments } from "../../Redux/Actions";
import style from "./Form.module.css";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Must be a name";
  }

  if (input.name && !/^[a-zA-Z]*$/.test(input.name)) {
    errors.name = "The name can not contain numbers or special caracters";
  }

  if (!input.height_min || input.height_min <= 0) {
    errors.height_min = "The min-height must be bigger";
  }
  if (!input.height_max || input.height_max <= 0) {
    errors.height_max = "The max-height must be bigger";
  }

  if (parseInt(input.height_min) >= parseInt(input.height_max)) {
    errors.especial1 =
      "The min-height can not be bigger or equal than the max-height";
  }

  if (parseInt(input.weight_min) >= parseInt(input.weight_max)) {
    errors.especial2 =
      "The min-weight can not be bigger or equal than the max-weight";
  }

  if (input.height) {
    if (!/^[0-9]*$/) {
      errors.height = "Only numbers please";
    }
  }
  if (!input.weight_min || input.weight_min <= 0) {
    errors.weight_min = "The min-weight must be bigger";
  }

  if (input.weight_min) {
    if (input.weight_max) {
      if (!/^[0-9]*$/) {
        errors.weight_min = "Only numbers please";
      }
    }
  }

  if (!input.weight_max || input.weight_max <= 0) {
    errors.weight_max = "The max-weight must be bigger";
  }
  if (input.weight_max) {
    if (!/^[0-9]*$/) {
      errors.weight_max = "Only numbers please";
    }
  }

  if (!input.life_span || input.life_span <= 0) {
    errors.life_span = "The life-span must be grather";
  }
  if (input.life_span) {
    if (!/^[0-9]*$/) {
      errors.life_span = "Only numbers please";
    }
  }

  return errors;
};



const CreateDog = () => {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    life_span: 0,
    image: "https://eskipaper.com/images/dogs-9.jpg",
    temperament: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleSelect = (e) => {
    if (!input.temperament.includes(e.target.value)) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDogs(input));
    alert("Congrats! The dog was created");
    setInput({
      name: "",
      image: "https://eskipaper.com/images/dogs-9.jpg",
      height_min: 0,
      height_max: 0,
      weight_min: 0,
      weight_max: 0,
      life_span: 0,
      temperament: [],
    });
  };

  const handleErase = (e) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((d) => d !== e),
    });
  };

  return (
    <div className={style.background}>
    <div className={style.container}>
      <div className={style.titulo}>
        <Link to="/home">
          <button className={style.button}>Home</button>
        </Link>
        <h1>Create Your Dog!</h1>
      </div>

      <div className={style.contenedor}>
        <form className={style.formStyle} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.items}>
            <h3>Name:</h3>
            <input
              required
              className={style.numInput}
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.items}>
            <h3>Min Height:</h3>
            <input
              min="0"
              className={style.numInput}
              type="number"
              value={input.height_min}
              name="height_min"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.items}>
            <h3>Max Height:</h3>
            <input
              min="0"
              className={style.numInput}
              type="number"
              value={input.height_max}
              name="height_max"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.items}>
            <h3>Min Weight:</h3>
            <input
              min="0"
              className={style.numInput}
              type="number"
              value={input.weight_min}
              name="weight_min"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.items}>
            <h3>Max Weight:</h3>
            <input
              min="0"
              className={style.numInput}
              type="number"
              value={input.weight_max}
              name="weight_max"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.items}>
            <h3>Life Years:</h3>
            <input
              min="0"
              className={style.numInput}
              type="text"
              value={input.life_span}
              name="life_span"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div></div>
          <div className={style.items}>
            <h3>Temperaments</h3>
            <select className={style.numInput} onChange={handleSelect}>
              <option value="default" disabled>
                temperaments
              </option>
              {allTemperaments.map((e) => {
                return (
                  <option value={e.name} key={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>

          {errors &&
          (errors.name ||
            errors.height_min ||
            errors.height_max ||
            errors.weight_min ||
            errors.weight_max ||
            errors.lifeTime ||
            errors.especial1 ||
            errors.especial2 ||
            !input.name.length ||
            input.height_min <= 0 ||
            input.height_max <= 0 ||
            input.weight_min <= 0 ||
            input.weight_max <= 0 ||
            input.lifeTime <= 0 ||
            input.height_min >= input.height_max ||
            input.weight_min >= input.weight_max ||
            !input.temperament.length) ? (
            <div className={style.btnh2}>Sorry your dog can't be created until you fill in the blanks!</div>
          ) : (
            <button className={style.button} type="submit">
              CREATE
            </button>
          )}
        </form>

        <div className={style.moodDiv}>
          {input.temperament.map((d, i) => {
            return (
              <div key={i++}>
                <div className={style.btnh3}> {d} </div>
                <button
                  className={style.eraserbtn}
                  onClick={() => handleErase(d)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>

        <div className={style.errorStyle1}>
          <h2>Errors:</h2>
          <div>
            <div className={style.errorStyle}>
              <h4>{errors.name && <p> {errors.name} </p>}</h4>
              <h4>{errors.height_min && <p> {errors.height_min} </p>}</h4>
              <h4>{errors.height_max && <p> {errors.height_max} </p>}</h4>
              <h4>{errors.weight_min && <p> {errors.weight_min} </p>}</h4>
              <h4>{errors.weight_max && <p> {errors.weight_max} </p>}</h4>
              <h4>{errors.lifeTime && <p> {errors.lifeTime} </p>}</h4>
              <h4>{errors.temperament && <p> {errors.temperament} </p>}</h4>
              <h4>{errors.especial1 && <p> {errors.especial1} </p>}</h4>
              <h4>{errors.especial2 && <p> {errors.especial2} </p>}</h4>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CreateDog;