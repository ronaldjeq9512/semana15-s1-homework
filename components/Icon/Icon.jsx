import './Icon.css'
// eslint-disable-next-line react/prop-types
export const Icon = ({imageUrl, position}) => {
    const className = position === 'right' ? 'imgContainer right' : 'imgContainer'
    return (
        <figure className={className}>
            <img className='icon' src={imageUrl} />
        </figure>
    )
}