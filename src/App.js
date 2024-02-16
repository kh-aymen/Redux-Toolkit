import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './features/card/cardSlice'
import Modal from './components/Modal'



const App = () => {
  const dispatch = useDispatch()
  const { cardItems, isLoading } = useSelector(state => state.card)
  const { isOpen } = useSelector(state => state.modal)


  useEffect(() => {
    dispatch(calculateTotals())
  }, [cardItems])

  useEffect(() => {
    dispatch(getCartItems({ firstName: 'khalfi', lastName: 'aymen' }))
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CardContainer />
      </main>
    </>
  )
}

export default App