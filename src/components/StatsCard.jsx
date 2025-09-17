import './StatsCard.css'

function StatsCard({ title, value, icon, color }) {
  return (
    <div className={`stats-card stats-card--${color}`}>
      <div className="stats-card__icon">
        {icon}
      </div>
      <div className="stats-card__content">
        <h3 className="stats-card__title">{title}</h3>
        <div className="stats-card__value">{value}</div>
      </div>
    </div>
  )
}

export default StatsCard