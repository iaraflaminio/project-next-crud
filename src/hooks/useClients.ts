import ClientCollection from "@/backend/database/ClientCollection"
import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"
import { useEffect, useMemo, useState } from "react"
import useTableOrForm from "./useTableForm"

export default function useClients() {
  const repo: ClientRepository =  new ClientCollection()

  const {tableVisible, showTable, showForm} = useTableOrForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAllClients, [])

  function getAllClients() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
  }

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
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
    tableVisible,
    showTable
  }
}