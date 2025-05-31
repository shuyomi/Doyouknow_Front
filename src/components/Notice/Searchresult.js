import NoticeItem from './NoticeItem';

const Searchresult = ({ notices }) => {
    return (
      <div>
        {notices.map((notice) => (
          <NoticeItem key={notice.id} notice={notice} />
        ))}
      </div>
    );
  };
  
export default Searchresult;