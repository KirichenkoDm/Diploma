import { fetchCoursesList, homeSearch } from "../../Store/homeCourses.slice";
import { FetchStatus } from "../../Utils/enums";
import { SearchFormData } from "../../Utils/formDataTypes";

export const ScrollHandler = (
  searchData: SearchFormData,
  dispatch: any,
  fetchStatus: FetchStatus,
  direction: number
) => {
  if (fetchStatus === FetchStatus.succeeded) {
    dispatch(homeSearch({
      ...searchData,
      page: searchData.page + direction
    }));
    dispatch(fetchCoursesList());
  }
};
