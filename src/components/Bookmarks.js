import React, { useState, useEffect } from 'react';

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    setBookmarkedJobs(savedJobs);
  }, []);

  if (bookmarkedJobs.length === 0) return <div>No jobs bookmarked yet</div>;

  return (
    <div>
      {bookmarkedJobs.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;