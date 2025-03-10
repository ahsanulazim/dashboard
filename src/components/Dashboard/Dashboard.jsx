import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaBoxesStacked, FaClipboardList, FaCreditCard, FaFileInvoiceDollar, FaStore, FaUserTie } from "react-icons/fa6";
import { MdCelebration } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link, Outlet } from "react-router";

const Dashboard = () => {

    const [isDark, setDark] = useState(true);

    return (
        <div className="drawer lg:drawer-open" data-theme={isDark ? "dark" : "light"}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <nav className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Dashboard</div>

                    {/* Dashboard Right Items Here */}

                    <div className="flex-none lg:block">
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="synthwave" onClick={() => setDark(!isDark)} />

                            {/* sun icon */}
                            <svg
                                className="swap-off size-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on size-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        <button className="btn btn-ghost btn-circle mr-2">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-xs bg-main indicator-item"></span>
                            </div>
                        </button>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge badge-sm bg-main">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Page content here */}
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
            <aside className="drawer-side z-[1] sm:z-0">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-72 p-4">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard"><TbLayoutDashboardFilled />Dashboard</Link></li>
                    <li>
                        <details>
                            <summary><FaFileInvoiceDollar />Orders <div className="badge badge-sm bg-main text-black">New</div></summary>
                            <ul>
                                <li><a>Add Order</a></li>
                                <li><Link to="/dashboard/orders">All Orders</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/dashboard/customers"><FaUserFriends />Customers</Link></li>
                    <li>
                        <details>
                            <summary><FaBoxesStacked />Products</summary>
                            <ul>
                                <li><a>Add Product</a></li>
                                <li><Link to="/dashboard/products">All Products</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><FaClipboardList />Category</summary>
                            <ul>
                                <li><a>Add Category</a></li>
                                <li><Link to="/dashboard/categories">All Categories</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><MdCelebration />Attributes</summary>
                            <ul>
                                <li><a>Add Attribute</a></li>
                                <li><Link to="/dashboard/attributes">All Attributes</Link></li>
                                <li><a>Brands</a></li>
                                <li><a>Colors</a></li>
                                <li><a>Sizes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><FaCreditCard />Purchases</summary>
                            <ul>
                                <li><a>Add Purchase</a></li>
                                <li> <Link to="/dashboard/purchases">All Purchases</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><FaStore />Vendors</summary>
                            <ul>
                                <li><a>Add Vendor</a></li>
                                <li> <Link to="/dashboard/vendors">All Vendor</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><FaUserTie />Role</summary>
                            <ul>
                                <li><a>Add Employee</a></li>
                                <li> <Link to="/dashboard/role">All Employees</Link></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </aside>
        </div>
    );
};

export default Dashboard;