import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext";
import { accountsAPI } from "../api/axios";

function Dashboard() {
  const { userData, token } = useContext(AuthContext);
  console.log(token);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await accountsAPI?.get(`/${userData?.id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setProfile(response?.data);
      } catch (error) {}
    };

    fetchProfile();
  }, [userData?.id, token]);

  console.log(profile)

  return <div>Hello {userData?.email}</div>;
}

export default Dashboard;
