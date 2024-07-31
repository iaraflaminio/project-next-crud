import ButtonClient from "@/components/ButtonClient"
import FormClient from "@/components/FormClient"
import Layout from "@/components/Layout"
import TableClient from "@/components/TableClient"
import { Inter } from "next/font/google"
import useClients from "@/hooks/useClients"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    selectClient,
    deleteClient,
    tableVisible,
    showTable
  } = useClients()



  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-purple-500 to-blue-600 
     ${inter.className}`}>

      <Layout Title="Simple CRUD">
        {tableVisible ? (
          <>
          <div className="flex justify-end">
            <ButtonClient color={'blue'} className="mb-4" onClick={newClient}>
              New Client
            </ButtonClient>
          </div>

          <TableClient clients={clients} selectedClient={selectClient} deletedClient={deleteClient}></TableClient>


        </>) : (
          <FormClient client={client} 
            changedClient={saveClient}
            canceled={showTable}
          />
        )}

      </Layout>
    </div>
  )
}
