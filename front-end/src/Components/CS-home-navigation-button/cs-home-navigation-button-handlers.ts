import { homeSearch } from "../../Store/homeCourses.slice";
import { SearchFormData } from "../../Utils/formDataTypes";

export const ScrollHandler = (searchData: SearchFormData, dispatch: any) => {
  dispatch(homeSearch(searchData));
};
