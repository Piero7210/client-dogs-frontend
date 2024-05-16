import {
  GET_ALL_DOGS,
  GET_ALL_TEMPERAMENTS,
  DOGS_ID,
  DOGS_NAME,
  CREATE_DOG,
  FILTER_CREATED_DOG,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  FILTER_BY_TEMPERAMENTS,
  CLEAR_DETAIL,
} from "./Actions";

const initialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  dogDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case DOGS_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case DOGS_ID:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    // case ORDER_BY_NAME:
    //   const orderDogs =
    //     action.payload === "A-Z"
    //       ? state.dogs.sort((a, b) => {
    //           if (a.name > b.name) return 1;
    //           if (a.name < b.name) return -1;
    //           return 0;
    //         })
    //       : state.dogs.sort((a, b) => {
    //           if (a.name > b.name) return -1;
    //           if (a.name < b.name) return 1;
    //           return 0;
    //         });
    //   return {
    //     ...state,
    //     dogs: orderDogs,
    //   };

    case ORDER_BY_NAME:
      const type = action.payload;
      let sortedDogs = [...state.dogs];
      let sortedDogs2 = [...state.dogs];

      if (type === "A-Z") {
        sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
        sortedDogs2.sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          allDogs: sortedDogs,
          dogs: sortedDogs2,
        };
      } else if (type === "Z-A") {
        sortedDogs.sort((a, b) => b.name.localeCompare(a.name));
        sortedDogs2.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          allDogs: sortedDogs,
          dogs: sortedDogs2,
        };
      } else {
        sortedDogs = state.allDogs;
      }

      return {
        ...state,
        dogs: sortedDogs,
      };

    case FILTER_CREATED_DOG:
      const allDogs = state.allDogs;
      const filterCreated =
        action.payload === "created"
          ? allDogs.filter((d) => d.createdInDb)
          : allDogs.filter((d) => !d.createdInDb);
      return {
        ...state,
        dogs: action.payload === "all" ? state.allDogs : filterCreated,
      };

    case ORDER_BY_WEIGHT:
      const allDogWeight = state.dogs.filter((d) => d.weight_min);
      const orderWeight =
        action.payload === "desc"
          ? allDogWeight.sort((a, b) => {
              return a.weight_min - b.weight_min;
            })
          : allDogWeight
              .sort((a, b) => {
                return a.weight_min - b.weight_min;
              })
              .reverse();

      return {
        ...state,
        dogs: orderWeight,
      };

    case FILTER_BY_TEMPERAMENTS:
      const allDogs2 = state.allDogs;
      const filteredTemp =
        action.payload === "All"
          ? allDogs2
          : allDogs2.filter((e) => {
              return e.temperament?.includes(action.payload);
            });

      return {
        ...state,
        dogs: filteredTemp,
        allDogs: state.allDogs,
      };

    case CLEAR_DETAIL: {
      return {
        ...state,
        dogDetail: {},
      };
    }

    case CREATE_DOG:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
