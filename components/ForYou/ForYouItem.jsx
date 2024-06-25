import './ForYouItem.css'

// eslint-disable-next-line react/prop-types
export const ForYouItem = ({source, title, subtitle}) => {
    return (
        <div className='forYouItemContainer'>
            <figure className='forYouItemImageContainer'>
                <img className='forYouItemImage' src={source} />
            </figure>
            <p className='forYouItemTitle'>{title}</p>
            <p className='forYouItemSubTitle'>{subtitle}</p>
        </div>
    )
}