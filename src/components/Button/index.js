import React from "react";
import "./style.scss";

export default function Button({onClick, titleBtn, type}) {
    const handleTypeButton = (type) => {
        let strClassname = "";
        switch(type) {
            case "searchBtn":
                strClassname = "btn-search";
                break;
            case "keyDeleteBtn":
                strClassname = "btn-delete-key";
                break;
            case "historyDeleteBtn":
                strClassname = "btn-delete-history-search";
                break;
            default:
                strClassname = "";
        }
        return strClassname;
    }

    return (
        <button type={type === "searchBtn" ? "submit" : "button"} className={handleTypeButton(type)} onClick={onClick}>{titleBtn}</button>
    );
}