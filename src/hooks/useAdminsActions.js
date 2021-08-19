import { useCallback, useContext } from "react";
import { AdminsContext } from "../context/AdminsContext";

const useAdminsActions = () => {
  const { context, setContext } = useContext(AdminsContext);

  const addNewAdmin = useCallback((newAdmin) => {
    setContext((prevState) => {
      return {
        ...prevState,
        admins: {
          ...prevState.admins,
          [newAdmin.id]: newAdmin,
        }
      }
    });
  }, [setContext]);

  return {
    ...context,
    addNewAdmin,
  };
}

export default useAdminsActions;