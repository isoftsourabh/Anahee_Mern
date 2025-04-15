import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

interface User {
  srNo: number;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  gender: string;
  status: 'Verified' | 'Unverified';
  id: number; // Unique identifier
}

const initialUsers: User[] = [
  { srNo: 1, firstname: 'Pranay', lastname: 'Gupta', email: 'pranay@email.com', mobile: '9090901115', gender: 'male', status: 'Verified', id: 1 },
  { srNo: 2, firstname: 'Dummy', lastname: 'User', email: 'yoapp@email.com', mobile: '1234567895', gender: 'male', status: 'Verified', id: 2 },
  // Add more users here
];

const Users: React.FC = () => {
      const navigate = useNavigate();
    
  const [users, setUsers] = useState(initialUsers);
  const [showRows, setShowRows] = useState(10);
  const [searchStatus, setSearchStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowRowsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShowRows(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleSearchStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchStatus(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleEditUser = (id: number) => {
    console.log(`Edit user with ID: ${id}`);
    alert(`Navigating to edit page for user ID: ${id}`);
    // In a real application, you would navigate to an edit form.
  };

  const handleDeleteUser = (id: number) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete user with ID: ${id}?`);
    if (confirmDelete) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      console.log(`Deleted user with ID: ${id}`);
      // In a real application, you would make an API call to delete the user.
    }
  };

  // Implement logic to filter and paginate users
  const filteredUsers = users.filter((user) => {
    const searchMatch = Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const statusMatch = searchStatus === '' || user.status.toLowerCase() === searchStatus.toLowerCase();
    return searchMatch && statusMatch;
  });

  const startIndex = (currentPage - 1) * showRows;
  const endIndex = startIndex + showRows;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredUsers.length / showRows);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="user-list-page">
      <h1>User List</h1>

      <div className="action-bar">
        <button className="add-user-button"  onClick={() => navigate("/Components/Register")}>➕ Add User</button>
      </div>

      <div className="filter-bar">
        <div className="status-filter">
          Search By Status:
          <select value={searchStatus} onChange={handleSearchStatusChange}>
            <option value="">All</option>
            <option value="Verified">Verified</option>
            <option value="Unverified">Unverified</option>
          </select>
        </div>
        <div className="export-buttons">
          Show
          <select value={showRows} onChange={handleShowRowsChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          rows
          {/* Placeholder for other export buttons */}
          {/* <button>Csv</button>
          <button>Copy</button>
          <button>Excel</button>
          <button>PDF</button>
          <button>Column visibility</button> */}
        </div>
        <div className="search-bar">
          Search: <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
        </div>
      </div>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.srNo}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditUser(user.id)}>
                    📝
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            {currentUsers.length === 0 && (
              <tr>
                <td colSpan={8}>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="list-pagination">
        Showing {startIndex + 1} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} entries
        <div className="pagination-controls">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages || totalPages === 0}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;

