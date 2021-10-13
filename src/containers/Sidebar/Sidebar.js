import { Link } from 'react-router-dom'

const Sidebar = ()=>{
    return (
        <div className="sidebar-wrapper">
            <div className="inner-sidebar">
                <div className="site-logo">
                    <img src="" alt="" />
                </div>
                <div className="route-link">
                    <Link><img src="" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar