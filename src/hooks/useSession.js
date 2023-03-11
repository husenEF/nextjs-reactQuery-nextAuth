import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import fetchSession from "../services/sessionService";

export function useSession({
  required,
  redirectTo = "/login?error=SessionExpired",
  queryConfig,
}) {
  const router = useRouter();
  const query = useQuery(["session"], fetchSession, {
    ...queryConfig,
    onSettled(data, error) {
      console.log("onSettled", {
        data,
        error,
      });
      if (queryConfig.onSettled) queryConfig.onSettled(data, error);
      if (Object.keys(data).length > 0 || !required) return;
      router.push(redirectTo);
    },
  });
  console.log({ query });
  return [query?.data, query.status === "loading"];
}
