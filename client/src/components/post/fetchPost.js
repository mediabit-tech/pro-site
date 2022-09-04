import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './fetchPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FetchPost = () => {

    const params = useParams();
    console.log(params);
    const [post, setPost] = useState("");

    // route for all posts
    const loadSinglePost = async () => {
        try {
            const getPost = await fetch(`/get-posts/${params.id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await getPost.json();
            setPost(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadSinglePost();
    }, []);

    return (
        <>
            <section className='common-section our-services'>
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
                                    <div className="col-3">
                                        <div>
                                            <h5>{post.category}</h5>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div>
                                            <h5>{post.mode}</h5>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        {/* just for spacing  */}
                                    </div>

                                    <div className="col-4">
                                        <div>
                                            <h5>{post.askingCompany}</h5>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div>
                                            <h5>{post.askingYear}</h5>
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

                                <SyntaxHighlighter language="javascript" style={stackoverflowLight} customStyle={{ fontSize: "1.5rem", fontFamily: "Poppins", border: "1px solid #c9a0dc" }}>
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
    )
}

export default FetchPost