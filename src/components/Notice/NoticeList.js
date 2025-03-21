import NoticeItem from './NoticeItem';

const NoticeList = ({ notices }) => {
  return (
    <div>
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default NoticeList;