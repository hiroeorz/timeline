const initialState = {
  timeline: [],
  text: "",
  human: {name: "", age: 0, nickname: ""}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    /* ツイートを投稿する */
    case 'POST_TWEET':
      console.log(state);
      return {
        ...state,
        text: "",
        timeline: [action.text, ...state.timeline]
      };

    /* ツイートを書き込むテキストボックスの内容を保持する */
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.text
      };

    case 'HUMAN':
      console.log(action);
      return {
        ...state,
        human: action.human
      };

    case 'HUMAN_ERROR':
      console.log(action);
      return state;

    default:
      return state
  }
}
