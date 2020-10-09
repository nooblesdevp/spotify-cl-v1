/* eslint-disable */
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    //remove token while finis debug
   // token: "QALucm-Kh0mxTH5eHDg-HhgaMt9oiRJUslji3eBxfuFOUjbxAjqF3wwQ7GOeSUt8mJeaWENyIuDoe1siDwndIHFrzVuBZ1YJ95dh4H67FixB-aPrENU-QcISDE_PUfqxWra5l3W2KQjH9gcV401okj7JsO3OZB5MyyA5GK5CGy08Mg6",
    
}

const reducer = (state, action ) => {
    console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN": 
            return{
                ...state,
                token: action.token,
            }
        case  "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        case  "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    
    }
}

export default reducer;