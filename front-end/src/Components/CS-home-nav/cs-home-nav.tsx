import { FC } from "react";
import { StyledHomeNav } from "./cs-home-nav-styled";
import { HomeLink } from "../CS-home-link/CS-home-link";
import { Field, Formik } from "formik";
import { useAppDispatch } from "../../Utils/hooks";
import { SearchFormData } from "../../Utils/formDataTypes";
import { SearchHandler } from "./cs-home-nav-handlers";
import { InputText } from "../CS-input-text/cs-input-text";
import { Topics } from "../../Utils/enums";

const selectOptions = (Object.keys(Topics) as (keyof typeof Topics)[]).map(key => Topics[key]);

export const HomeNav: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledHomeNav>
      <nav>
        <HomeLink/>
        <Formik
          initialValues= {{
            querry: "",
            topic: "Topic"
          } as SearchFormData}
          // validate = {validate}
          onSubmit = {(values) => {
            SearchHandler(values, dispatch);
          }}
        >
          { formik => (
            <form onSubmit={formik.handleSubmit}>
              <InputText
                name="querry"
                id="querry"
                placeholder="serach by name or descriprion"
              />
              <Field name="topic" as="select">
                <option key = "Topic" value = "Topic">Topic</option>
                {selectOptions.map(key => <option key={key} value = {key}>{key}</option>)}
              </Field>
              <button type="submit">Search</button>
            </form>
          )}

        </Formik>
      </nav>
    </StyledHomeNav>
  );
};
