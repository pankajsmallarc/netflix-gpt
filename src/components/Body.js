import appRouter from "../utils/appRouter";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
