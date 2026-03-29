import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      axios.get(`http://localhost:8080/api/users/${storedUser.username}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  if (!user) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <p><b>ID:</b> {user.id}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default Profile;