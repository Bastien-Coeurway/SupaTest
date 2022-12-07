import { useEffect, useState } from 'react';
import { supabase } from '../lib/initSupabase';

export default function UserList() {
  const [tableTest, setUsers] = useState([]);

  useEffect(() => {
    UserList();
  }, []);

  const UserList = async () => {
    const { data: tableTest } = await supabase
      .from('tableTest')
      .select('*')
      .order('name', true);
    setUsers(tableTest);
  };

  return (
    <ul>
      {tableTest.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}