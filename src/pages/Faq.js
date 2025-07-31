import "../styles/Faq/Faq.css";
import FaqHeader from "../components/Faq/FaqHeader";
import FaqNav from "../components/Faq/FaqNav";
import FaqList from "../components/Faq/FaqList";

const Faq = () => {
    return (
        <div className="faq-page">
            <FaqHeader />
            <FaqNav />
            <FaqList />
        </div>
    );
};

export default Faq;
