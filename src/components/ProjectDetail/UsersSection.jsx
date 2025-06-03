import React from 'react';

const UsersSection = ({ title = "Our Users", users, id }) => {
  return (
    <section id={id || "our-users"} className="mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">{title}</h2>
      {users.map((user, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">{user.type}</h3>
          <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">JOBS-TO-BE-DONE</h4>
          <p className="text-base md:text-lg font-light mb-2">{user.needs}</p>
          <p className="text-base md:text-lg font-light">{user.description}</p>
        </div>
      ))}
    </section>
  );
};

export default UsersSection; 