// import { createSelector } from "reselect";
// // import { rootReducer } from "../store";

// // type RootState = ReturnType<typeof rootReducer>;

// export const selectServices = (state) =>
//   state.servicesReducer.services;

// export const selectSearchTerm = (state) =>
//   state.filterReducer.searchTerm;

// export const selectFilteredMovies = createSelector(
//   [selectServices, selectSearchTerm],
//   (services, searchTerm) => {
//     if (!searchTerm.trim()) return services;

//     return services.filter((service) =>
//       service.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }
// );

// export const selectFilterStats = createSelector(
//   [selectFilteredServices, selectServices],
//   (filtered, all) => ({
//     found: filtered.length,
//     total: all.length,
//   })
// );
