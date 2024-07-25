import ButtonClient from "@/components/ButtonClient"
import FormClient from "@/components/FormClient"
import Layout from "@/components/Layout"
import TableClient from "@/components/TableClient"
import Client from "@/core/Client"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [client, setClient] = useState<Client>(Client.empty())
  const [visibleTable, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Catherine', 28, '2'),
    new Client('Stephan', 30, '3'),
    new Client('Caleb', 29, '4')
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function deletedClient(client: Client) {
    console.log(`Delete: ${client.name}`)
  }

  function newClient(){
    setClient(Client.empty())
    setVisible('form')
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }



  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500 to-blue-600 
     ${inter.className}`}>

      <Layout Title="Simple CRUD">
        {visibleTable === 'table' ? (<>

          <div className="flex justify-end">
            <ButtonClient color={'blue'} className="mb-4" onClick={newClient}>
              New Client
            </ButtonClient>
          </div>

          <TableClient clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></TableClient>


        </>) : (
          <FormClient client={client} 
            changedClient={saveClient}
            canceled={() => setVisible('table')}
          />
        )}

      </Layout>
    </div>
  )
}
