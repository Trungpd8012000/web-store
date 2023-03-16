import React, {useState} from "react";
import { Form, InputGroup } from "react-bootstrap";
import * as yup from 'yup';
import {v4 as uuidv4} from "uuid";
import "./style.scss";
import Button from "@componentsMain/Button";
import SearchResult from "../SearchResult";

export default function SearchForm({isToggleSearch}) {
    const [keyword, setKeyWord] = useState("");
    const [isBtnDeleteKey, setIsBtnDeleteKey] = useState(false);
    const [resutls, setResults] = useState([]);
    const schema = yup.object().shape({
        keyword: yup.string().required()
    });

    const handleSearch = (e) => {
        const {value} = e.target;
        setKeyWord(value);

        if (value !== "") {
            setIsBtnDeleteKey(true);
        } else {
            setIsBtnDeleteKey(false);
        }
    }

    const handleDeleteKey = () => {
        setKeyWord("");
        setIsBtnDeleteKey(false);
    }

    const performSearch = (keyword) => {
        let newResults = [];
        const newResult = {id: uuidv4(), name: keyword};

        if (resutls.length) {
            const newResultsFilter = resutls.filter((result) => result.name !== keyword);
            newResults = [newResult, ...newResultsFilter];
        } else {
            newResults = [newResult, ...resutls];
        }

        setResults(newResults);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setKeyWord("");
        setIsBtnDeleteKey(false);
        performSearch(keyword);

        try {
            await schema.validate({ keyword }, { abortEarly: false });

          } catch (err) {
            const errors = {};

            err.inner.forEach((er) => {
              errors[er.path] = er.message;
            });
          }
    }

    const handleDeleteHistory = (historyId) => {
        const resultsFilter = resutls.filter((result) => result.id !== historyId);
        setResults(resultsFilter);
    }

    return (
        <Form className={`search-form ${isToggleSearch ? "show" : "hide"}`} onSubmit={handleSubmit}>
            <InputGroup>
                <input name="search" type="text" placeholder="Search..." autoComplete="off" value={keyword} onChange={handleSearch}  />
                <Button type="searchBtn" titleBtn={<i className="fa-solid fa-magnifying-glass"></i>} />
                {isBtnDeleteKey ? <Button type="keyDeleteBtn" onClick={handleDeleteKey} titleBtn={<i className="fa-solid fa-xmark"></i>} /> : null}
                {keyword ? <SearchResult keyword={keyword} results={resutls} onDeleteHistory={handleDeleteHistory} /> : null}
            </InputGroup>
        </Form>
    );
}