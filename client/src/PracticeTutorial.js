import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './components/loader/loader';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from './components/Header';
import './App.css';

const PracticeTutorial = () => {

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

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
            <Header />
            <section className='common-section'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-12 lg-col-10">
                                    <div class="card card-top-up">
                                        <div class="card-body">
                                            {/* Practice Problems */}
                                            <div class="input-group mb-3">
                                                <input type="search" class="form-control search-control" placeholder="Search by title, sub-title ..."
                                                    onChange={event => setQuery(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <Scrollbars style={{ width: 'auto', height: 500 }} > */}
                                {loading ? (<Loader />) : (
                                    <>
                                        <div class="row mb-3 row-cols-2 row-cols-md-4 g-4">
                                            {(posts && posts.length > 0) && posts.filter((post) => {
                                                if (query == "") {
                                                    return post
                                                } else if (post.title.toLowerCase().includes(query.toLowerCase()) || post.subTitle.toLowerCase().includes(query.toLowerCase())) {
                                                    return post
                                                }
                                            }).map((post, key) => {
                                                return (<>
                                                    <Link to={`${post._id}`} key={key}>
                                                        <div class="col">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title" style={{ fontSize: '1.3rem' }}>{post.title}</h5>
                                                                    <p class="card-text" style={{ color: '#4d4d4e', fontSize: '1.1rem' }}>{post.subTitle}</p>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <small class="text-muted">{post.tag}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </>)
                                            })}
                                        </div>
                                    </>
                                )}
                            {/* </Scrollbars> */}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PracticeTutorial;