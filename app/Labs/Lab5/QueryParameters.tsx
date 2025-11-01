import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER =
    process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>

            <FormControl id="wd-query-parameter-a"
                defaultValue={a} type="number"
                onChange={(e) => setA(e.target.value)} />

            <FormControl id="wd-query-parameter-b"
                defaultValue={b} type="number"
                onChange={(e) => setB(e.target.value)} />

            <a id="wd-query-parameter-add"
            className="btn btn-primary mb-2"
            href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b} </a>

            <a id="wd-query-parameter-subtract"
            className="btn btn-success mb-2"
            href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Subtract {a} - {b} </a>
            
            <a id="wd-query-parameter-multiply"
            className="btn btn-warning mb-2"
            href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                Multiply {a} * {b} </a>

            <a id="wd-query-parameter-divide"
            className="btn btn-danger mb-2"
            href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                Divide {a} / {b} </a>

        </div>
    );
}