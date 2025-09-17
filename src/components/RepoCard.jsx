import './RepoCard.css'

function RepoCard({ repo }) {
  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'YAML': '#cb171e',
      'TypeScript': '#2b7489',
      'CSS': '#563d7c'
    }
    return colors[language] || '#666'
  }

  return (
    <div className="repo-card">
      <div className="repo-card__header">
        <h3 className="repo-card__name">{repo.name}</h3>
        <span className="repo-card__update">{repo.lastUpdate}</span>
      </div>
      
      <p className="repo-card__description">{repo.description}</p>
      
      <div className="repo-card__meta">
        <div className="repo-card__language">
          <span 
            className="language-dot" 
            style={{ backgroundColor: getLanguageColor(repo.language) }}
          ></span>
          {repo.language}
        </div>
        
        <div className="repo-card__stats">
          <span className="stat">
            <span className="stat-icon">⭐</span>
            {repo.stars}
          </span>
          <span className="stat">
            <span className="stat-icon">🍴</span>
            {repo.forks}
          </span>
          <span className="stat">
            <span className="stat-icon">🔄</span>
            {repo.openPRs} PRs
          </span>
        </div>
      </div>
    </div>
  )
}

export default RepoCard