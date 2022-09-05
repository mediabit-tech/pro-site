import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const PracticeTutorial = () => {

    const [posts, setPosts] = useState("");

    // route for all posts
    const loadAllPosts = async () => {
        try {
            const getPosts = await fetch('/get-posts', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await getPosts.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadAllPosts();
    }, []);

    return (
        <>
            <section className='common-section our-services'>
                <div className="container">
                    <h5>DSA Sets:</h5>
                    <div class="row row-cols-4">
                        {(posts && posts.length > 0) && posts.map((post) => {
                            return (<>
                                <Link to={`${post._id}`}>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <div class="card custom-card">
                                                <div class="card-body">
                                                    <h5 class="card-title" style={{ fontSize: '1.3rem' }}>{post.title}</h5>
                                                    <p class="card-text" style={{ color: '#4d4d4e', fontSize: '1.1rem' }}>{post.subTitle}</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">{post.askingCompany}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>)
                        })}
                    </div>
                </div>
            </section >
        </>
    )
}

export default PracticeTutorial;