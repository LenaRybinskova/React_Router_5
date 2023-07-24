import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PageType ={
    pages: PagesType[]
}
const Page = (props:PageType) => {
    // Юз парам берет из УРЛа все что после двоеточия и созд объект {id: "1"}
    const params = useParams()
    const element = Number(params.id)

    console.log(params)
// если такой введеный урл существует, то отрисовываем данные, если нет - ошибку
    return (
            props.pages[element]
                ? <div>
                <h2>{props.pages[element].heading}</h2>
                <h2>{props.pages[element].about}</h2>
            </div>
                : <Error404/>
    );
};

export default Page;