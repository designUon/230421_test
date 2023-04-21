import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import '../css/style.css';

export default function Story() {
    const [selectedStory, setSelectedStory] = useState(null);
    const { state: { storylist } } = useContext(DataContext);

    // 선택한 스토리가 있으면 해당 스토리 데이터만 필터링해서 보여줌
    const filterStoryList = selectedStory
        ? storylist.filter(story => story.title === selectedStory)
        : storylist;

    return (
        <div>
            <h1>StoryList</h1>
            <div className="storylist">
                <Link to='/story/apple'
                    className={`${selectedStory === 'AppleStory' ? "green" : ""} ${filterStoryList[0]?.title === "AppleStory" ? "green" : ""}`}
                    onClick={() => {
                        setSelectedStory('AppleStory');
                    }}
                >
                    AppleStory
                </Link>
                <Link to='/story/orange'
                    className={`${selectedStory === 'OrangeStory' ? "green" : ""} ${filterStoryList[0]?.title === "OrangeStory" ? "green" : ""}`}
                    onClick={() => {
                        setSelectedStory('OrangeStory');
                    }}
                >
                    OrangeStory
                </Link>
                <Link to='/story/peach'
                    className={`${selectedStory === 'PeachStory' ? "green" : ""} ${filterStoryList[0]?.title === "PeachStory" ? "green" : ""}`}
                    onClick={() => {
                        setSelectedStory('PeachStory');
                    }}
                >
                    PeachStory
                </Link>
            </div>
            <div>
                {/* 첫 번째 데이터만 렌더링 */}
                {filterStoryList.slice(0, 1).map((data) => (
                    <div className='storycontent' key={data.id}>
                        <h4>{data.title}</h4>
                        <img src={data.image} alt={data.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
