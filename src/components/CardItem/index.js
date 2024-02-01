import './index.css'

const TechnologyCard = props => {
  const {techDetails} = props
  const {title, description, imgUrl, className} = techDetails

  return (
    <li className={`${className} tech-card-items`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default TechnologyCard
