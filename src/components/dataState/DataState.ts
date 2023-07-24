export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
}



export const dataState: DataStateType = {
    pages:
        [
            {
                heading: "ПЕРВАЯ СТРАНИЦА - Цикл while",
                about: " Цикл while имеет следующий синтаксис: ",
            },
            {
                heading: "ВТОРАЯ СТРАНИЦА - Цикл for",
                about: " Цикл for имеет следующий синтаксис: ",
            },
            {
                heading: "ТРЕТЬЯ СТРАНИЦА -Конструкция switch",
                about: " Конструкция switch заменяет собой сразу несколько if.",
            },
        ],
}

