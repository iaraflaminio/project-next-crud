import ButtonNewClient from "@/components/ButtonNewClient";
import FormClient from "@/components/FormClient";
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
    console.log(client.name)
  }

  function deletedClient(client: Client) {
    console.log(`Delete: ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500 to-blue-600 
     ${inter.className}`}>

      <Layout Title="Simple CRUD">
        <div className="flex justify-end">
          <ButtonNewClient className="mb-4">New Client</ButtonNewClient>
        </div>
        {/* <TableClient clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></TableClient> */}
        <FormClient client={clients[0]}></FormClient>
      </Layout>
    </div>
  );
}
