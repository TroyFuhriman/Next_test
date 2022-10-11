import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps(context) {
  const getCustomerList = async (practitioner_id) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Ocp-Apim-Subscription-Key",
      "d9a365cc375e428ea3735c51ec8b703f"
    );
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      practitioner_id: practitioner_id,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      "https://cellcore-reports.azure-api.net/api/customers_list?code=d9a365cc375e428ea3735c51ec8b703f",
      requestOptions
    );
    const result = await response.json();

    return result.data;
  };
  const practitioner_id = "63b7e3d2-0e39-11eb-8ca4-0050562db46f";
  const customers = await getCustomerList(practitioner_id);
  return {
    props: { customers },
  };
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.customers.map((customer) => {
          return <div key={customer.customer_id}>{customer.name}</div>;
        })}
        <Link href="/about">
          <Button variant="contained">Go To About</Button>
        </Link>
        <Link href="/learningcenter">
          <Button variant="contained">Go To Learning</Button>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
}
