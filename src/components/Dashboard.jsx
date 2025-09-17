import { useState } from 'react'
import './Dashboard.css'
import StatsCard from './StatsCard'
import RepoCard from './RepoCard'
import PullRequestCard from './PullRequestCard'
import ActivityFeed from './ActivityFeed'

function Dashboard() {
  const [stats] = useState({
    totalRepos: 5,
    activePRs: 12,
    codeReviews: 8,
    contributors: 15
  })

  const [repositories] = useState([
    {
      id: 1,
      name: 'nobe-workshop-tutorial',
      description: 'Main tutorial repository for NOBE workshop',
      language: 'JavaScript',
      stars: 23,
      forks: 7,
      openPRs: 3,
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      name: 'code-review-demo',
      description: 'Demo repository showcasing code review best practices',
      language: 'Python',
      stars: 45,
      forks: 12,
      openPRs: 5,
      lastUpdate: '1 day ago'
    },
    {
      id: 3,
      name: 'github-workflows',
      description: 'Collection of GitHub Actions workflows',
      language: 'YAML',
      stars: 18,
      forks: 4,
      openPRs: 1,
      lastUpdate: '3 days ago'
    }
  ])

  const [pullRequests] = useState([
    {
      id: 1,
      title: 'Add responsive design to dashboard',
      repo: 'nobe-workshop-tutorial',
      author: 'john-doe',
      status: 'open',
      reviewers: 2,
      created: '3 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Fix authentication bug in login flow',
      repo: 'code-review-demo',
      author: 'jane-smith',
      status: 'review',
      reviewers: 1,
      created: '1 day ago',
      priority: 'critical'
    },
    {
      id: 3,
      title: 'Update CI/CD pipeline configuration',
      repo: 'github-workflows',
      author: 'bob-wilson',
      status: 'approved',
      reviewers: 3,
      created: '2 days ago',
      priority: 'medium'
    }
  ])

  const [activities] = useState([
    {
      id: 1,
      type: 'PR_OPENED',
      user: 'john-doe',
      repo: 'nobe-workshop-tutorial',
      action: 'opened pull request #23',
      timestamp: '3 hours ago'
    },
    {
      id: 2,
      type: 'CODE_REVIEW',
      user: 'jane-smith',
      repo: 'code-review-demo',
      action: 'reviewed pull request #15',
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      type: 'MERGE',
      user: 'bob-wilson',
      repo: 'github-workflows',
      action: 'merged pull request #8',
      timestamp: '1 day ago'
    },
    {
      id: 4,
      type: 'COMMIT',
      user: 'alice-brown',
      repo: 'nobe-workshop-tutorial',
      action: 'pushed 3 commits to main',
      timestamp: '1 day ago'
    }
  ])

  return (
    <div className="dashboard">
      {/* Stats Overview */}
      <section className="dashboard-section">
        <h2>Overview</h2>
        <div className="stats-grid">
          <StatsCard 
            title="Total Repositories" 
            value={stats.totalRepos} 
            icon="📁"
            color="blue"
          />
          <StatsCard 
            title="Active Pull Requests" 
            value={stats.activePRs} 
            icon="🔄"
            color="orange"
          />
          <StatsCard 
            title="Code Reviews" 
            value={stats.codeReviews} 
            icon="🔍"
            color="green"
          />
          <StatsCard 
            title="Contributors" 
            value={stats.contributors} 
            icon="👥"
            color="purple"
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Repositories Section */}
        <section className="dashboard-section">
          <h2>Repositories</h2>
          <div className="cards-container">
            {repositories.map(repo => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>

        {/* Pull Requests Section */}
        <section className="dashboard-section">
          <h2>Recent Pull Requests</h2>
          <div className="cards-container">
            {pullRequests.map(pr => (
              <PullRequestCard key={pr.id} pullRequest={pr} />
            ))}
          </div>
        </section>
      </div>

      {/* Activity Feed */}
      <section className="dashboard-section">
        <h2>Recent Activity</h2>
        <ActivityFeed activities={activities} />
      </section>
    </div>
  )
}

export default Dashboard