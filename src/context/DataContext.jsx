import React, { useState, createContext } from 'react'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [storylist, setStorylist] = useState([
        {
            id: 1,
            title: "AppleStory",
            image: "/apple.png",
        },
        {
            id: 2,
            title: "OrangeStory",
            image: "/orange.jpg",
        },
        {
            id: 3,
            title: "PeachStory",
            image: "/peach.png",
        },
    ].map(product => ({
        ...product,
        image: process.env.PUBLIC_URL + product.image
    })));

    const value = {
        state: { storylist },
        action: { setStorylist }
    };

    return (
        <DataContext.Provider value={value}>
            {children}
            {/* {storylist.map((data) => (
                <div key={data.id}>
                    <h4>{data.title}</h4>
                    <img src={data.image} alt={data.title} />
                </div>
            ))} */}
        </DataContext.Provider>
    );
};

export { DataProvider };
export default DataContext;
