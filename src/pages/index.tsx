import Layout from "@/components/Layout";
import TableClient from "@/components/TableClient";
import Client from "@/core/Client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Catherine', 28, '2'),
    new Client('Stephan', 30, '3'),
    new Client('Caleb', 29, '4')
  ]

  function selectedClient(client: Client) {

  }

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500 to-blue-600 
     ${inter.className}`}>
      
      <Layout Title="Simple CRUD">
        <TableClient clients={clients} selectedClient={selectedClient}></TableClient>
      </Layout>
    </div>
  );
}
