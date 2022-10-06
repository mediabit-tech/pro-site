import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/loader';
import { useNavigate, Link } from 'react-router-dom';
import './fetchPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/hljs';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FetchPost = () => {

    let navigate = useNavigate();
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState("");
    const [loading, setLoading] = useState(true);

    //  for change the nested route
    function changeLocation(placeToGo) {
        navigate(placeToGo, { replace: true });
        window.location.reload();
    }

    // go to back handler
    window.onpopstate = () => {
        navigate("/");
    }

    // route for single post
    const loadSinglePost = async () => {
        try {
            const getPost = await fetch(`/get-posts/${params.id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await getPost.json();
            setPost(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

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
        loadSinglePost();
        loadAllPosts();
        console.log("posts: ", posts);
    }, []);

    return (
        <>
            {loading ? (<Loader />) : (
                <>
                    <section className='common-section'>
                        <div className="container mb-5">
                            <div className="row custom-theme">
                                <div className="col-12 col-lg-8" >
                                    <div key={post._id}>

                                        <div className="mb-3">
                                            <h2>{post.title}</h2>
                                        </div>

                                        <div className="mb-3">
                                            <h3>{post.subTitle}</h3>
                                        </div>

                                        <hr />

                                        <div className="row">
                                            <div className="col">
                                                <div className="col lg-col-3">
                                                    <div>
                                                        <h5><span class="badge bg-custom-one">Category</span><span class="badge bg-custom-two">{post.category}</span></h5>
                                                    </div>
                                                </div>
                                                <div className="col lg-col-3">
                                                    <div>
                                                        <h5><span class="badge bg-custom-one">Mode</span><span class="badge bg-custom-two">{post.mode}</span></h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="col lg-col-3">
                                                    <div>
                                                        <h5><span class="badge bg-custom-one">Asking by</span><span class="badge bg-custom-two">{post.askingCompany}</span></h5>
                                                    </div>
                                                </div>
                                                <div className="col lg-col-3">
                                                    <div>
                                                        <h5><span class="badge bg-custom-one">Year</span><span class="badge bg-custom-two">{post.askingYear}</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="mb-3">
                                            <p>{post.message}</p>
                                        </div>

                                        <div className="mb-3">
                                            <p>{post.inputOptionalMessage}</p>
                                        </div>

                                        <SyntaxHighlighter language={javascript} style={stackoverflowLight} customStyle={{ fontSize: "1.5rem", border: "1px solid #A78571", fontWeight: 'lighter' }}>
                                            {post.codingSnippet}
                                        </SyntaxHighlighter>

                                        <div className="mb-3">
                                            <p>{post.outputOptionalMessage}</p>
                                        </div>

                                        <div className="mb-3">
                                            <h6>{post.tag}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4" >
                                    <div className="mb-3">
                                        {loading ? (<Loader />) : (
                                            <>
                                                <h1>Most Recent Posts</h1>
                                                <div class="row mb-3 row-cols-2 row-cols-md-1 g-1">
                                                    {posts && posts.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).slice(0, 5).map((post, index) => {
                                                        return (<>
                                                            <Link to={`/${post._id}`} key={index} onClick={() => changeLocation(`/${post._id}`)}>
                                                                <div className="right-side-all-pots">
                                                                    <p>{post.subTitle}</p>
                                                                    <p>{post.tag}</p>
                                                                </div>
                                                            </Link>
                                                        </>)
                                                    })}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default FetchPost