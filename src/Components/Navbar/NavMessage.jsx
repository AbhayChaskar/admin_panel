import React from 'react'

const NavMessage = () => {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon chat-icon' href='#' data-bs-toggle="dropdown">
            <i className='bi bi-chat-left-text'></i>
            <span className='badge bg-success badge-number'>3</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
            <li className='dropdown-header'>
                You have 3 new messages
                <a href='#'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        View all
                    </span>
                </a>
            </li>
            <li className='message-item'>
                <a href='#'>
                    <img src='src/assets/messages-1.png' alt="" className='rounded-circle'/>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum, Cupiditate quod eos culpa ab non dicta ipsa fuga.</p>
                        <p>30 min ago</p>
                    </div>
                </a> 
            </li>

            <li>
                <hr className='dropdown-divider'></hr>      
            </li>

            <li className='message-item'>
                <a href='#'>
                    <img src='src/assets/messages-2.svg' alt="" className='rounded-circle'/>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum, Cupiditate quod eos culpa ab non dicta ipsa fuga.</p>
                        <p>1 hr. ago</p>
                    </div>
                </a> 
            </li>

            <li>
                <hr className='dropdown-divider'></hr>      
            </li>

            <li className='message-item'>
                <a href='#'>
                    <img src='src/assets/messages-3.png' alt="" className='rounded-circle'/>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum, Cupiditate quod eos culpa ab non dicta ipsa fuga.</p>
                        <p>2 hr. ago</p>
                    </div>
                </a> 
            </li>
            
            <li className='dropdown-footer'>
                <a href='#'>Show all Notifications</a>
            </li>
        </ul>
    </li>
  )
}

export default NavMessage