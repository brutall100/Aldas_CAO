import MainSection from '../components/MainSection'
import SidebarSection from '../components/SidebarSection'
import './NewsPage.css'

const NewsPage = () => {
    return (
        <div className="container">
            <div className="page-content">
                <MainSection />        
                <SidebarSection />
            </div>
        </div>
    )
}

export default NewsPage