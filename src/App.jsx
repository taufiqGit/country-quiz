import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './App.module.css'
import CardQuiz from './component/organisms/cardQuiz'
import CardResult from './component/organisms/cardResult'
import { GetInitCountries } from './store/questionAction'

let firstRender = true

function App() {
  const listCountries = useSelector(state => state.question.listCountries)
  const { isPosition } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const getInitCoutry = useCallback(async ()=>{
    dispatch(GetInitCountries())
    //console.log('iooo');
  }, [GetInitCountries])

  useEffect(()=>{
    if (firstRender) {
      getInitCoutry()
      firstRender = false
    }
  }, [])

  return (
    <div className={style.App}>
      {
        isPosition === 'try again' ? <CardResult/> :
        listCountries.length > 0 ? <CardQuiz/> : ''
      }
      <footer className={style.footer}>
       Created by <a href='https://taufiq.vercel.app'>Taufiq</a>, Design from <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
      </footer>
    </div>
  )
}

export default App
