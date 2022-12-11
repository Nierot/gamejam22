import { getPreviewUrl, spotifyApi } from '../utils/spotify'

export default function Callback() {

  function getAccessToken() {
    const hash = window.location.hash
    const params = new URLSearchParams(hash.substring(1))
    const token = params.get('access_token')

    spotifyApi.setAccessToken(token)
  }

  const play = async () => {
    getAccessToken()
    const url = await getPreviewUrl('spotify:track:2vRI17zbIpXatNS3IS1ktx')
    const audio = new Audio(url)
    audio.play()
  }

  return <div>
    Callback

    <button onClick={play}>
      Play
    </button>
  </div>
}