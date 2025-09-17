import './ActivityFeed.css'

function ActivityFeed({ activities }) {
  const getActivityIcon = (type) => {
    const icons = {
      'PR_OPENED': '🔄',
      'CODE_REVIEW': '🔍',
      'MERGE': '✅',
      'COMMIT': '💾',
      'ISSUE_OPENED': '🐛',
      'ISSUE_CLOSED': '✔️'
    }
    return icons[type] || '📝'
  }

  const getActivityColor = (type) => {
    const colors = {
      'PR_OPENED': '#28a745',
      'CODE_REVIEW': '#fd7e14',
      'MERGE': '#6f42c1',
      'COMMIT': '#007bff',
      'ISSUE_OPENED': '#dc3545',
      'ISSUE_CLOSED': '#28a745'
    }
    return colors[type] || '#666'
  }

  return (
    <div className="activity-feed">
      {activities.map(activity => (
        <div key={activity.id} className="activity-item">
          <div 
            className="activity-item__icon"
            style={{ backgroundColor: getActivityColor(activity.type) }}
          >
            {getActivityIcon(activity.type)}
          </div>
          
          <div className="activity-item__content">
            <div className="activity-item__header">
              <span className="activity-item__user">{activity.user}</span>
              <span className="activity-item__repo">in {activity.repo}</span>
            </div>
            <div className="activity-item__action">{activity.action}</div>
            <div className="activity-item__timestamp">{activity.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityFeed