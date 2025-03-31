import React from 'react'

const NavNoti = () => {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                You have 4 new notifications
                <a href='#'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        View all
                    </span>
                </a>
            </li>
            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Warning</h4>
                    <p>Your session is about to expire. Please save your work!</p>
                    <p>40 min ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'></hr>      
            </li>

            <li className='notification-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>Need Action</h4>
                    <p>You do not have permission to access this section. Contact the administrator if needed.</p>
                    <p>2 hr. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'></hr>      
            </li>

            <li className='notification-item'>
                <i className='bi bi-check-circle text-success'></i>
                <div>
                    <h4>System Update</h4>
                    <p>A new update is available. Refresh the page to apply changes.</p>
                    <p>5 hr. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'></hr>      
            </li>

            <li className='notification-item'>
                <i className='bi bi-info-circle text-proimary'></i>
                <div>
                    <h4>Help</h4>
                    <p>Encountering an issue? Check our Troubleshooting Guide or contact support for assistance.</p>
                    <p>4 hr. ago</p>
                </div>
            </li>

            <li className='dropdown-footer'>
                <a href='#'>Show all Notifications</a>
            </li>
        </ul>
    </li>
  )
}

export default NavNoti