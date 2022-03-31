import axios from "axios";

export const apiQuery = axios.create({
  baseURL: 'http://api:3000/api/v1',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
})

export const apiMutation = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
})
