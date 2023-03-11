// import { getSession, useSession } from "next-auth/react";

import { useSession } from "@/hooks/useSession";

const UserPage = () => {
  // const { data } = useSession();
  const [data, loading] = useSession({
    required: true,
    queryConfig: {
      staleTime: 60 * 1000 * 60 * 3, // 3 hours
      refetchInterval: 60 * 1000 * 5, // 5 minutes
    },
  });
  console.log({ data, loading });
  return (
    <div className="container bg-yellow-200 mx-auto max-w-lg p-5 h-screen">
      <h2>User page detail</h2>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default UserPage;
