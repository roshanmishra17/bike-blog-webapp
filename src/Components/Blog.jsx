import { useState } from 'react';
import '..//CSS/Blog.css';
import Post from './Post'
export default function Blog(){

    const[currentIndex,setCurrentIndex] = useState(0)

    function nextPost(){
        setCurrentIndex((prev) => (prev + 1)%Post.length)
    }
    function prevPost(){
        setCurrentIndex((prev) => (prev === 0 ? Post.length - 1 : prev - 1 ))
    }

    return(
        <>
            <h3 className='h3' id='blog'>Stories from the Road</h3>
            <div className="slider-container" >
                <button className="left-btn" onClick={prevPost}>
                    &#9664;
                </button>
                <div className="slider">
                    <div
                    className="posts-container"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Post.map((post) => (
                            <section className="Blog" key={post.id}>
                                <div className="info">
                                    <img
                                    src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
                                    alt={post.author}
                                    />
                                    <div className="user-detail">
                                    <h3>{post.author}</h3>
                                    <p>{post.location}</p>
                                    </div>
                                </div>
                                <p className="para">{post.content}</p>
                            </section>
                        ))}
                    </div>
                </div>
                <button className="right-btn" onClick={nextPost}>
                    &#9654;
                </button>
            </div>
        </>
    )
}