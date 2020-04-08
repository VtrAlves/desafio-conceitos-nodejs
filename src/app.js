const express = require('express')
const cors = require('cors')
const { uuid } = require('uuidv4')

// const { uuid } = require("uuidv4");

const app = express()

app.use(express.json())
app.use(cors())

const repositories = []

app.get('/repositories', (request, response) => {
  response.json(repositories)
})

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body

  const id = uuid()

  const repo = {
    id,
    title,
    url,
    techs,
    likes: 0
  }

  const repoIndex = repositories.push(repo)

  return response.json(repositories[repoIndex - 1])
  // TODO
})

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params

  const repoIndex = repositories.findIndex(repository => repository.id === id)

  if (!id || repoIndex < 0) {
    return response.status(400).json({ message: 'repo not found' })
  }

  let { url, title, techs } = request.body

  url = url ? url : repositories[repoIndex].url
  title = title ? title : repositories[repoIndex].title
  techs = techs ? techs : repositories[repoIndex].techs
  const likes = repositories[repoIndex].likes

  repositories[repoIndex] = {
    id,
    title,
    techs,
    url,
    likes
  }

  return response.json(repositories[repoIndex])
})

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params

  const repoIndex = repositories.findIndex(repository => repository.id === id)

  if (!id || repoIndex < 0) {
    return response.status(400).json({ message: 'repo not found' })
  }

  repositories.splice(repoIndex, 1)

  response.status(204).send()
})

app.post('/repositories/:id/like', (request, response) => {
  const { id } = request.params

  const repoIndex = repositories.findIndex(repository => repository.id === id)

  if (!id || repoIndex < 0) {
    return response.status(400).json({ message: 'repo not found' })
  }

  repositories[repoIndex].likes++

  response.json({ likes: repositories[repoIndex].likes })
})

module.exports = app
