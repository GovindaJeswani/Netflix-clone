import { getVideos } from "../../lib/videos"

export default async function handler(req, res) {
	if(req.method === "POST"){
		const data = JSON.parse(req.body)
		const searchResults = await getVideos(data.searchTerm)
		res.status(200).send(JSON.stringify(searchResults))
	}
  }
  