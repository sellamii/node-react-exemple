import { all } from 'redux-saga/effects'
import {createtPostInAPI, deletePostFromApi, fetchPostsFromApi} from '../services/posts'
import { takeLatest, put, call, select  } from 'redux-saga/effects'
import { updatePostInAPI } from '../services/posts'
import navigateTo from '../services/navigation'
import {selectPosts} from "../selectors/posts";
//fetch Posts
function* fetchPosts() {
  yield put({ type: 'FETCH_POSTS_PENDING' })

  try {
    const postsFromApi = yield call(fetchPostsFromApi)
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: postsFromApi })
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts)
}

function* fetchPostsIfNeeded() {
  const { items: posts } = yield select(selectPosts)
  if (posts.length === 0) {
    yield call(fetchPosts)
  }
}

function* watchFetchPostsIfNeeded() {
  yield takeLatest('FETCH_POSTS_IF_NEEDED', fetchPostsIfNeeded)
}


//Create Post
function* createPost(action) {
  yield put({ type: 'CREATE_POST_PENDING' })

  try {
    const newPost = yield call(createtPostInAPI, action.payload)
    yield put({ type: 'CREATE_POST_SUCCESS', payload: newPost })
    navigateTo('/page/posts')
  } catch (error) {
    yield put({ type: 'CREATE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

function* watchCreatePost() {
  yield takeLatest('CREATE_POST', createPost)
}
//delete post
function* deletePost(action) {
  yield put({ type: 'DELETE_POST_PENDING', id: action.id })

  try {
    const { count } = yield call(deletePostFromApi, action.id)
    if (count !== 1) throw new Error('API delete request failed')
    yield put({ type: 'DELETE_POST_SUCCESS', id: action.id })
  } catch (error) {
    yield put({ type: 'DELETE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

function* watchDeletePost() {
  yield takeLatest('DELETE_POST', deletePost)
}
//Update Post
function* updatePost(action) {
  yield put({ type: 'UPDATE_POST_PENDING' })

  try {
    const updatedPost = yield call(updatePostInAPI, action.payload)
    yield put({ type: 'UPDATE_POST_SUCCESS', payload: updatedPost })
    navigateTo('/page/posts')
  } catch (error) {
    yield put({ type: 'UPDATE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

function* watchUpdatePost() {
  yield takeLatest('UPDATE_POST', updatePost)
}

export default function* rootSaga() {
  yield all([
    watchFetchPostsIfNeeded(),
    watchFetchPosts(),
    watchDeletePost(),
    watchCreatePost(),
    watchUpdatePost()
  ])
}
