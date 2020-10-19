// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirecUri = "http://localhost:3000/";
const clientId = "564edea9538d49a38b2362f87b939e51";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirecUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
