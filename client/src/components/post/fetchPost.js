import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/loader';
import './fetchPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/hljs';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FetchPost = () => {

    const params = useParams();
    console.log(params);
    const [post, setPost] = useState("");
    const [loading, setLoading] = useState(true);

    // route for all posts
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

    useEffect(() => {
        // eslint-disable-next-line
        loadSinglePost();
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

                                        <SyntaxHighlighter language={javascript} style={vs} customStyle={{ fontSize: "1.5rem", border: "1px solid #A78571", fontWeight: 'lighter' }}>
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
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default FetchPost