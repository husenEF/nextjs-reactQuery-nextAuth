import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

import { dehydrate, useQuery } from "@tanstack/react-query";
import { QueryInitialze } from "./_app";
import fetchSession from "../services/sessionService";

export default function UserServerPage(props) {
  const { data } = useQuery({ queryKey: ["session"], queryFn: fetchSession });
  console.log({ props, dataA1: data });
  return (
    <div className="container bg-yellow-200 mx-auto max-w-lg p-5 h-screen">
      <h2>User page detail</h2>
      {props?.session && <pre>{JSON.stringify(props?.session, null, 2)}</pre>}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  //   const session = await getSession(ctx);
  // const session = await getServerSession(ctx.req, ctx.res, authOptions);
  // console.log({ sessioss: session });
  await QueryInitialze.prefetchQuery(["session", fetchSession]);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      // session: await session,
      dehydratedState: dehydrate(QueryInitialze),
    },
  };
}
