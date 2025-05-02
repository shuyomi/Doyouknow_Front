import React from "react";
import "../../styles/Notice/NoticeCategory.css";
import { TabView, TabPanel } from "primereact/tabview";

const NoticeCategory = ({ categories, onSelectCategory, selectedCategory }) => {
    const handleTabChange = (e) => {
        const newCategory = categories[e.index];
        onSelectCategory(newCategory);
    };

    return (
        <div className="notice-category-tabview">
            <TabView
                activeIndex={categories.indexOf(selectedCategory)}
                onTabChange={handleTabChange}
                pt={{
                    nav: { style: { gap: "4px" } },
                }}
            >
                {categories.map((category) => (
                    <TabPanel
                        key={category}
                        header={category}
                        pt={{
                            headerAction: {
                                style: {
                                    fontSize: "12px",
                                    padding: "15px 12px",
                                },
                            },
                        }}
                    />
                ))}
            </TabView>
        </div>
    );
};
export default NoticeCategory;
