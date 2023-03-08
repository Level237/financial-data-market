import axios from "axios";

const TOKEN="cg3efahr01qh2qlfgm9gcg3efahr01qh2qlfgma0"
export default axios.create({
  baseURL:"https://finnhub.io/api/v1",
  params:{
    token:TOKEN
  }
})