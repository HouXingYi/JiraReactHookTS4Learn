import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { useEffect } from "react";
import { cleanObject } from "utils/index";
// import { User } from "types/user";
import { User } from "screens/project-list/search-panel";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param, run, client]);

  return result;
};
