import { useLoaderData, useParams } from 'react-router-dom'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

const CardProducts = () => {

  const data = useLoaderData()
  const { category } = useParams() 
  const [clock, setclock] = useState([])
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        coffee => coffee.category === category
      )
      setclock(filteredByCategory)
    } else {
      setclock(data)
    }
  }, [category, data])
  console.log(data)
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
        {clock.map(coffee => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      
    </>
  )
}

export default CardProducts
