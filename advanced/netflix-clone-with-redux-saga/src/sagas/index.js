// import redux saga.
import { all } from "redux-saga/effects";
// import sagas.
import loginSaga from "./LoginSaga";

function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootSaga;
