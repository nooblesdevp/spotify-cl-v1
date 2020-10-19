/* eslint-disable */
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  top_artists: null,
  spotify: null,
  //remove token while finis debug
  // token: null,
  // "BQD2MsWYWbjUcHvADukBgUc4iXXp7ndRj-jYMck09Ab1NnBjvgzOEAVZcKhj0dW7hBeQO7SohP8_aF4niXv9vLWAc7W0C1XFkv6yEgx_zpP64gjP35oFGb-p0tVHkaHkBWsj23NAWsnz2WuiKAvaqWeofrAMgukfBy7ARATzapObpYlt",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    default:
      return state;
  }
};

export default reducer;
