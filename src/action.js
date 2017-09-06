import {store} from './store.js';

export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    /* ツイートを投稿する */
    postTweet: (text) => {
      dispatch( {type: 'POST_TWEET', text: text} );
    },

    /* ツイートを書き込むテキストボックスの内容をstate.textに保持する */
    changeText: (text) => {
      dispatch( {type: 'CHANGE_TEXT', text: text} );
    },

    searchHuman: () => {
      let f = function (dispatch) {
        return fetch('http://localhost:3000/hiroe.json').then(
          response => {
            response.json().then(
              (json) => dispatch({type: 'HUMAN', human: json})
            )
          },
          error =>
            dispatch({type: 'HUMAN_ERROR', reason: error})
        )
      }

      store.dispatch(f).then( () => { console.log("Done!"); })
    }

  }
}
