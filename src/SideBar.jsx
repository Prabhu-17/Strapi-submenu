import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"
import sublinks from "./data"

const SideBar = () => {
  const {isSideBarOpen,closeSideBar}=useGlobalContext()

  return (
    <aside className={isSideBarOpen?'sidebar show-sidebar':'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSideBar}><FaTimes/></button>
        <div className="sidebar-links">
          {sublinks.map((item)=>{
            const {pageId,page,links}=item
            return <article key={pageId}>
              <h3>{page}</h3>
              <div className="sidebar-sublinks">
                {links.map((link)=>{
                  const {icon,id,label,url}=link
                  return <a key={id} href={url}>
                    {icon}
                    {label}
                  </a>
                })}
              </div>
            </article>
          })}
        </div>
      </div>
    </aside>
  )
}
export default SideBar