export interface News {
    label: string;
    date: Date;
    page: string;
}

export const news: News[] = [
    {
        label: "FAQ公開",
        date: new Date(2023, 1, 15),
        page: "/faq",
    },
    {
        label: "たんしきの恋愛ゲーム制作決定",
        date: new Date(2023, 1, 15),
        page: "",
    },
    {
        label: "たんしき、彼女と別れる",
        date: new Date(2021, 5, 8),
        page: "",
    },
    {
        label: "たんしき、彼女ができる",
        date: new Date(2021, 5, 5),
        page: "",
    },
    {
        label: "「たんしきのアクション」各種プラットフォームにて配信検討",
        date: new Date(2022, 1, 1),
        page: "",
    },
    {
        label: "1st Single「GAP TOOTH」発売検討",
        date: new Date(2022, 1, 1),
        page: "",
    },
];