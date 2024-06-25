import './ForYou.css'
import { ForYouItem } from './ForYouItem'

const fourYouList = [
    {
        source: 'https://th.bing.com/th/id/OIP.HGwGqH0hwUuKQqWn40hjOgHaHa?rs=1&pid=ImgDetMain',
        title: 'Airport pickup',
        subtitle: 'We provide escort form the airport to the hotel'
    },
    {
        source: 'https://th.bing.com/th/id/OIP.HGwGqH0hwUuKQqWn40hjOgHaHa?rs=1&pid=ImgDetMain',
        title: 'Easy booking',
        subtitle: 'We provide escort form the airport to the hotel'
    },
    {
        source: 'https://th.bing.com/th/id/OIP.HGwGqH0hwUuKQqWn40hjOgHaHa?rs=1&pid=ImgDetMain',
        title: 'Best tour guide',
        subtitle: 'We provide escort form the airport to the hotel'
    },
    {
        source: 'https://th.bing.com/th/id/OIP.HGwGqH0hwUuKQqWn40hjOgHaHa?rs=1&pid=ImgDetMain',
        title: 'Lots of promos',
        subtitle: 'We provide escort form the airport to the hotel'
    },
]


export const ForYou = () => {
    return (
        <section className='forYouContainer'>
            <p className="title">Top values for you</p>
            <p className="subTitle">Try variety of benefits when using our services</p>
            <article className='forYouListContainer'>
                {
                    fourYouList.map((item, key)=> (
                        <ForYouItem key={key} subtitle={item.subtitle} source={item.source} title={item.title} />
                    ))
                }
            </article>
        </section>
    )
}