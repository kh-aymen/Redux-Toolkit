import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './features/card/cardSlice'
import Modal from './components/Modal'
import { Box, Button, Container, Fab, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'


const FlexRowCenter = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2rem',
}))



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

      <Container>
        <Stack direction={'row'} spacing={2} sx={{ alignItems: 'cetner' }}>
          <Button variant='text' color='primary'>Button</Button>
          <Button variant='outlined' color='secondary' disableRipple>Button</Button>
          <Button variant='contained' color='secondary'>Button</Button>
          <Button variant='contained' color='testColor'>Button</Button>
        </Stack>

        <Stack direction={'row'} flexWrap={'wrap'} spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant='h1'>Aymen</Typography>
          <Typography variant='h2'>Aymen</Typography>
          <Typography variant='h3'>Aymen</Typography>
          <Typography variant='h4'>Aymen</Typography>
          <Typography variant='h5'>Aymen</Typography>
          <Typography variant='h6'>Aymen</Typography>
        </Stack>

        <FlexRowCenter>
          <Fab variant='circular' color='primary' size='large'>
            <AddIcon />
          </Fab>
          <Fab variant='circular' color='success' size='medium'>
            <AddIcon />
          </Fab>
          <Fab variant='circular' color='info' size='small'>
            <AddIcon />
          </Fab>
          <Fab variant='circular' color='warning' size='small' sx={{ width: 50, height: 50 }}>
            <AddIcon />
          </Fab>
          <Fab variant='square' color='info' size='small'>
            <AddIcon />
          </Fab>
        </FlexRowCenter>
      </Container>
      <br />
      <br />
    </>
  )
}

export default App