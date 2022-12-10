import { useGetGifts } from '../hooks/useGetGifts';
import { GiftItem } from './GiftItem';

export const GridGift = ({ category }) => {

  const { images, isLoading } = useGetGifts( category );
    
  return (
    <>
        <h3>{ category }</h3> 
        {
          isLoading && ( <h2>Cargando...</h2>)
        }
        <div className='card-grid'>
        {
          images.map( ( image ) => (
            <GiftItem
              key={ image.id }
              { ... image }
            />
          ))
        }
        </div>
    </>
  )
}
