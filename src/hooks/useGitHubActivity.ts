import { useEffect, useState } from 'react';

export interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    action?: string;
    ref?: string;
    ref_type?: string;
    commits?: { message: string }[];
  };
}

function formatEvent(event: GitHubEvent): string {
  switch (event.type) {
    case 'PushEvent': {
      const count = event.payload.commits?.length ?? 0;
      return `Pushed ${count} commit${count !== 1 ? 's' : ''} to ${event.repo.name}`;
    }
    case 'CreateEvent':
      return `Created ${event.payload.ref_type} ${event.payload.ref ?? ''} in ${event.repo.name}`;
    case 'PullRequestEvent':
      return `${event.payload.action === 'opened' ? 'Opened' : 'Updated'} a PR in ${event.repo.name}`;
    case 'IssuesEvent':
      return `${event.payload.action === 'opened' ? 'Opened' : 'Updated'} an issue in ${event.repo.name}`;
    case 'WatchEvent':
      return `Starred ${event.repo.name}`;
    case 'ForkEvent':
      return `Forked ${event.repo.name}`;
    default:
      return `Activity in ${event.repo.name}`;
  }
}

export function useGitHubActivity(username: string, limit = 6) {
  const [events, setEvents] = useState<{ id: string; text: string; date: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetch(`https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=${limit}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status === 403 ? 'Rate limited' : 'Failed to fetch');
        return res.json();
      })
      .then((data: GitHubEvent[]) => {
        if (cancelled) return;
        setEvents(
          data.map((e) => ({
            id: e.id,
            text: formatEvent(e),
            date: new Date(e.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            }),
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  return { events, loading, error };
}
