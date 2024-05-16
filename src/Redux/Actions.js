import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const DOGS_ID = "DOGS_ID";
export const DOGS_NAME = "DOGS_NAME";
export const CREATE_DOG = "CREATE_DOG";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_CREATED_DOG = "FILTER_CREATED_DOG";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const getAllDogs = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_ALL_DOGS, // propiedad que describe lo que quiero que haga.
      payload: data, // info adicional que le envío al reducer para que sepa lo que tiene que hacer.
    });
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: GET_ALL_TEMPERAMENTS, // propiedad que describe lo que quiero que haga.
      payload: data, // info adicional que le envío al reducer para que sepa lo que tiene que hacer.
    });
  };
};

export const dogsId = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: DOGS_ID,
      payload: data,
    });
  };
};

export const dogsName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/dogs?name=${name}`
      );
      return dispatch({
        type: DOGS_NAME, // propiedad que describe lo que quiero que haga.
        payload: data, // info adicional que le envío al reducer para que sepa lo que tiene que hacer.
      });      
    } catch (error) {
      alert("The dog could not be found")
    }
  };
};

export const createDogs = (create) => {
  console.log(create);
  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:3001/dogs/create", create);
    return dispatch({
      type: CREATE_DOG,
      payload: data,
    });
  };
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
}

export function FilterByTemperament(payload) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}

export function filterCreatedDog(payload) {
  return {
    type: FILTER_CREATED_DOG,
    payload,
  };
}

export function clearDetail() {
  return {
    type: CLEAR_DETAIL,
  };
}
