import './category-item.styles.scss';

const CategoryItem = ({category}) =>{
    const {title,imageUrl} = category;
    return (
        <div className='category-container'> 
            <div 
                className='background-image' 
                style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className='category-body-container'>
                <h1 className='title'>{title}</h1>
                <p>Shop now</p>
            </div>
            
        </div>
    )
}
export default CategoryItem