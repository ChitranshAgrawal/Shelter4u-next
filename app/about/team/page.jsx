// app/about/team/page.jsx
'use client';

import { useState, useEffect } from 'react';
import TeamClient from './TeamClient';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch('/api/about/team');
        
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        
        const data = await response.json();
        setTeamMembers(data.team || []);
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError(err.message);
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white">Loading team members...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return <TeamClient teamMembers={teamMembers} />;
}


