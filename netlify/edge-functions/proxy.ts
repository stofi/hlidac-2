import type { Context } from 'https://edge.netlify.com'

export default async (request: Request, context: Context) => {
  // const url = 'https://www.hlidacstatu.cz'
  // const response = await fetch(url)
  // const json = await response.json()

  const { url, method, headers, bodyUsed } = request
  const newUrl = url.replace(/.+\/proxy/, '')
  const requestUrl = `https://www.hlidacstatu.cz${newUrl}`

  const resp = await fetch(requestUrl, {
    method,
    headers,
  })
    .then((resp) => resp.json().catch(() => resp.text()))
    .catch((e) => ({
      error: e.message,
      url: requestUrl,
    }))

  return new Response(JSON.stringify(resp))

  // return context.json(json)
}
// const handler: Handler = async (event, context) => {
//   // proxy to avoid CORS issues
//   const eventUrl = event.rawUrl
//   // const url = 'https://www.hlidacstatu.cz'
//   // const response = await fetch(url)

//   // const json = await response.json()

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: eventUrl }),
//   }
// }

// export { handler }
