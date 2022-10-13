
import { takeEvery, delay, put, call } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { fetchCount } from './counterAPI'
import { inceaseSaga, inceaseSagaSuccess } from './counterSlice'

// export function* log(action: PayloadAction) {
//     console.log('Log', action)
// }

function* testCallAPI() {
    //Return an effect(JS Object)
    yield call(fetchCount, 2)
}

function* handleInceaseSaga(action: PayloadAction<number>) {
    // console.log('Handle incease saga')
    yield delay(1000)

    yield put(inceaseSagaSuccess(action.payload))
}

export default function* counterSaga() {
    // console.log('Counter saga')
    // yield takeEvery('*', log)

    // yield takeEvery('counter/increment', log)

    yield takeEvery(inceaseSaga.toString(), handleInceaseSaga)
}