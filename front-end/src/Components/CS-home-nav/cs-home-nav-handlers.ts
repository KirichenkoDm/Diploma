import { fetchCoursesList, homeSearch } from "../../Store/homeCourses.slice";
import { FetchStatus } from "../../Utils/enums";
import { SearchFormData } from "../../Utils/formDataTypes";

export const SearchHandler = (
  searchData: SearchFormData,
  dispatch: any,
  fetchStatus: FetchStatus
) => {
  if (fetchStatus === FetchStatus.succeeded) {
    dispatch(homeSearch(searchData));
    dispatch(fetchCoursesList());
  }
};
