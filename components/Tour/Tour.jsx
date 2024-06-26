import './Tour.css';
import { TourItem } from './TourItem';

const tours = [
  {
    image: 'https://www.tapetus.pl/obrazki/n/253082_gory-jezioro-lasy-odbicie.jpg',
    title: 'Alone with nature',
    price: '$100',
    stars: '5.0',
  },
  {
    image: 'https://c4.wallpaperflare.com/wallpaper/767/686/500/beautiful-lake-wallpaper-wallpaper-thumb.jpg',
    title: 'Jeep ride',
    price: '$200',
    stars: '4.9',
  },
  {
    image: 'https://www.usa-reisen-experte.de/wp-content/uploads/reservierung-glacier-nationalpark.jpg',
    title: 'Hiking tour',
    price: '$150',
    stars: '5.0',
  },
  {
    image: 'https://1.bp.blogspot.com/-UjQ6jBM3_lo/VzVAsI9exTI/AAAAAAADBi4/FnFGwi2N6RcpspaMiJVRvZxBrPJqky1MgCLcB/s1600/paisajes%2Bde%2Bensue%25C3%25B1o%2Bnaturaleza%2Blagos%2Bmonta%25C3%25B1as%2By%2Bflores%2B1920x1200px%2B%25285%2529.jpg',
    title: 'Corners of the island',
    price: '$220',
    stars: '4.8',
  },
];

export const Tour = () => {
  return (
    <section className='tourContainer'>
      <h2 className='titleTour'>Choose your tour</h2>
      <article className='tourItemsContainer'>
        {tours.map((item, index) => (
          <TourItem
            key={index}
            stars={item.stars}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </article>
    </section>
  );
};
