import ClientCollection from "@/backend/database/ClientCollection"
import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"
import { useEffect, useState } from "react"

export default function useClients() {
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

  function selectClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function deleteClient(client: Client) {
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

  return {
    client,
    clients,
    newClient,
    saveClient, 
    deleteClient,
    selectClient,
    getAllClients,
    visibleTable,
    setVisible,
  }
}