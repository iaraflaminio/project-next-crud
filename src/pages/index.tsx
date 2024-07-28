import ClientCollection from "@/backend/database/ClientCollection"
import ButtonClient from "@/components/ButtonClient"
import FormClient from "@/components/FormClient"
import Layout from "@/components/Layout"
import TableClient from "@/components/TableClient"
import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"
import { Inter } from "next/font/google"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visibleTable, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAllClients, [])

  function getAllClients(){
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  function newClient(){
    setClient(Client.empty())
    setVisible('form')
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
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
