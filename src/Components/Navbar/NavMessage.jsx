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
                        <h4>Ballaleshwar Raut</h4>
                        <p>Payment for your order failed. Please update your payment method and try again.</p>
                        <p>25 min ago</p>
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
                        <h4>Pallavi Khot</h4>
                        <p>Your order has been placed successfully. Check your email for details.</p>
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
                        <h4>Akshay Chaskar</h4>
                        <p>Good news! Your order has been shipped and is on its way. Track your shipment for updates.</p>
                        <p>3 hr. ago</p>
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