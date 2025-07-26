import NoticeItem from './NoticeItem';
import "../../styles/Notice/NoticeList.css";


const NoticeList = ({ notices }) => {
  return (
    <div className='noticelist'>
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default NoticeList;