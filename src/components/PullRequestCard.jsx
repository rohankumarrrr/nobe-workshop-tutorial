import './PullRequestCard.css'

function PullRequestCard({ pullRequest }) {
  const getStatusColor = (status) => {
    const colors = {
      'open': '#28a745',
      'review': '#fd7e14',
      'approved': '#007bff',
      'merged': '#6f42c1',
      'closed': '#dc3545'
    }
    return colors[status] || '#666'
  }

  const getPriorityColor = (priority) => {
    const colors = {
      'critical': '#dc3545',
      'high': '#fd7e14',
      'medium': '#ffc107',
      'low': '#28a745'
    }
    return colors[priority] || '#666'
  }

  return (
    <div className="pr-card">
      <div className="pr-card__header">
        <h4 className="pr-card__title">{pullRequest.title}</h4>
        <span 
          className="pr-card__priority"
          style={{ backgroundColor: getPriorityColor(pullRequest.priority) }}
        >
          "this is the change i made"
        </span>
      </div>
      
      <div className="pr-card__meta">
        <span className="pr-card__repo">📁 {pullRequest.repo}</span>
        <span className="pr-card__author">👤 {pullRequest.author}</span>
      </div>
      
      <div className="pr-card__footer">
        <span 
          className="pr-card__status"
          style={{ color: getStatusColor(pullRequest.status) }}
        >
          ● {pullRequest.status}
        </span>
        <span className="pr-card__reviewers">
          🔍 {pullRequest.reviewers} reviewers
        </span>
        <span className="pr-card__created">{pullRequest.created}</span>
      </div>
    </div>
  )
}

export default PullRequestCard