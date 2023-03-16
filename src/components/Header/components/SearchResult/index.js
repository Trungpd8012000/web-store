import React from "react";
import "./style.scss";
import Button from "@componentsMain/Button";

export default function SearchResult({results, keyword, onDeleteHistory}) {
    return (
        <ul className="search-result">
            {keyword ? results.slice(0, 5).map((result) => (
              <li key={result.id} className="position-relative">
                {result.name}
                <Button type="historyDeleteBtn" onClick={() => onDeleteHistory(result.id)} titleBtn="supprimer"/>
              </li>
            )) : null}
            <div className="keyword">Search all for: <span style={{color: "red"}}><b>{keyword}</b></span></div>
        </ul>
    );
}