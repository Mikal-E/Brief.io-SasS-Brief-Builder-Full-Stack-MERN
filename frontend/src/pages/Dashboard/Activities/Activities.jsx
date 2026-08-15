import { useState, useEffect } from "react";
import { API_URL } from "../../../config";
import "./Activities.css";

function Activities() {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchActivities = async () => {

      try {

        // const res = await fetch("http://localhost:3001/api/activities");
        const res = await fetch(`${API_URL}/api/activities`);

        if (!res.ok) throw new Error("Failed to fetch activities");
        const data = await res.json();
        setActivities(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };

    fetchActivities();

  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p>Error: {error}</p>;

  return (

    <div className="activities-page">

      <h1>Activities</h1>

      <ul className="activities-list">

        {activities.map((activity) => (

            <li key={activity._id} className={`activity-item ${!activity.read ? "unread" : ""}`}>

                <p className="activity-message">{activity.message}</p>

                <span className="activity-meta">

                    {activity.teamMember?.name} · {activity.brief?.projectName} ·{" "}
                    {new Date(activity.createdAt).toLocaleString()}

                </span>

            </li>

            ))}

        </ul>

    </div>
  );

}

export default Activities;