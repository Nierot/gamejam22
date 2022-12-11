import SpotifyWebApi from 'spotify-web-api-js';

export const spotifyApi = new SpotifyWebApi();


export function getPreviewUrl(trackId: string) {
  return spotifyApi.getTrack(trackId).then((data) => {
    if (!data) {
      throw new Error('Failed getting track preview url')
    }
    return data.preview_url;
  });
}

export function loginWithSpotify(redirectUri: string) {
  const scopes = 'user-read-private user-read-email';
  const clientId = 'c4d26847715a4acfa808a2ef4aed70d7'

  const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

  window.location.href = url;
}