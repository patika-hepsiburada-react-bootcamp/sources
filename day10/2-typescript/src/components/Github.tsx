import React, { useState, useEffect } from 'react';

interface UserType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: any;
  blog: string;
  location: string;
  email: any;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const Github: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [users, setUsers] = useState<UserType[]>([]);

  const loadData = async () => {
    const data = await fetch(`https://api.github.com/users/${username}`);
    const res = await data.json();

    setUsers((p) => [...p, res]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  return (
    <pre>
      <input value={username} onChange={handleChange} />
      <button onClick={loadData}>Add</button>

      {/* {JSON.stringify(users, null, 2)} */}

      <div>
        {users?.map((item) => (
          <div key={item.id}>
            <img src={item.avatar_url} alt="" style={{ width: '40px', borderRadius: '50%' }} />
            {item.name}
          </div>
        ))}
      </div>
    </pre>
  );
};

export default Github;
