import '../../styles/CampusInfo/CampusInfoContents.css';
import { TabView, TabPanel } from 'primereact/tabview';
import AnyangPage from './Anyang/AnyangPage';
import GanghwaPage from './Ganghwa/GanghwaPage';


const CampusInfoContents = () => {

    return (
        <TabView>
        <TabPanel header="   안양캠퍼스   " pt={{ headerAction: { className: 'anyang-tab' } }}>
            <div className="anyang">
            <AnyangPage />
            </div>
        </TabPanel>
        <TabPanel header="   강화캠퍼스  " pt={{ headerAction: { className: 'ganghwa-tab' } }}>
        <div className="Ganghwa">
               <GanghwaPage />
                </div>
        </TabPanel>
        
    </TabView>
    );
};

export default CampusInfoContents;
