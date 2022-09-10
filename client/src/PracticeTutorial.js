import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './components/loader/loader';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';

const PracticeTutorial = () => {

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = useState(true);

    // route for all posts
    const loadAllPosts = async () => {
        try {
            const getPosts = await fetch('/get-posts', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await getPosts.json();
            setPosts(data);
            setLoading(false);
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
                    <div className="row">
                        <div className="col">
                            <h5 className='text-center'><span class="badge bg-custom-practice-tutorial">Basic DSA's Sets</span></h5>
                            {/* <div class="row row-cols-4"> */}
                            <Scrollbars style={{ width: 'auto', height: 500 }} >
                                {loading ? (<Loader />) : (
                                    <>
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
                                    </>
                                )}
                            </Scrollbars>
                            {/* </div> */}
                        </div>

                        <div className="col">
                            <h5 className='text-center'><span class="badge bg-custom-practice-tutorial">Advance DSA's Sets</span></h5>
                            {/* <div class="row row-cols-4"> */}
                            <Scrollbars style={{ width: 'auto', height: 500 }} >
                                <p className='text-center'>Posts isn't found.</p>
                            </Scrollbars>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PracticeTutorial;