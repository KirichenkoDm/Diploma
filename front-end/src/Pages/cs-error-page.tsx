import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Page not found</h1>
      <p>Sorry, an unexpected error has occurred or no such page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
