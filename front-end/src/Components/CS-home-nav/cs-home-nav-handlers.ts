import { homeSearch } from "../../Store/homeCourses.slice";
import { SearchFormData } from "../../Utils/formDataTypes";

export const SearchHandler = (searchData: SearchFormData, dispatch: any) => {
  dispatch(homeSearch(searchData));
};
