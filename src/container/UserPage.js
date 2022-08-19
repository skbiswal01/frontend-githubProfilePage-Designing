import React, { useState, useEffect } from "react";
import { getUserData} from "../provider/githubprovider";
import Profile from "../components/Profile";
function UserPage({ props }) {
  const [user, setUser] = useState();
  
  const userNameParams = props;

  useEffect(() => {
    fetchUser();
   
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }
  

  return (
    <>
      {user ? (
        <>
           <Profile user={user}/>
        </>
      ) : (
        <p>Not Available </p>
      )}
    </>
  );
}

export default UserPage;