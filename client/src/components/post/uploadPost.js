import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './uploadPost.css';
import { NotificationManager } from 'react-notifications';

const UploadPost = () => {
    const navigate = useNavigate();
    // we can't use async function inside the useEffect hooks so that's why i'm define callUploadPostPage() function the outside of the useEffect hooks 
    const callUploadPostPage = async () => {
        try { // credentials check 
            const res = await fetch('/upload-post', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            await res.json();
            // assurity
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/admin-signin');
        }
    }

    useEffect(() => {
        callUploadPostPage();
    }, []);

    // create new post
    const [post, setPost] = useState({
        title: "", subTitle: "", message: "", inputOptionalMessage: "", codingSnippet: "", outputOptionalMessage: "", category: "", tag: "", mode: "", askingCompany: "", askingYear: ""
    });

    let name, value;
    const handleInputes = (e) => {
        name = e.target.name;
        value = e.target.value;

        setPost({ ...post, [name]: value });
    }

    const sendDataOnBackend = async (e) => {
        e.preventDefault();
        const { title, subTitle, message, inputOptionalMessage, codingSnippet, outputOptionalMessage, category, tag, mode, askingCompany, askingYear } = post;

        const res = await fetch('/submitpost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, subTitle, message, inputOptionalMessage, codingSnippet, outputOptionalMessage, category, tag, mode, askingCompany, askingYear })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            console.log('Error while uploading post!');
        } else {
            // console.log('New post uploaded!', 'Successful!', 5000);
            NotificationManager.success('Uploaded successfully!', post.title);
        }
    }

    function clickOnLogoutPanel(e) {
        e.preventDefault();
        navigate('/upload-post/logout');
    }

    return (
        <>
            <section>
                <div className="container custom-container">
                    <div className="row custom-css">
                        {/* right side */}
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6">
                                    <h1>Create Your New Post</h1>
                                </div>
                                <div className="col-6">
                                    <button className='btn btn-style-custom' onClick={clickOnLogoutPanel}>Logout</button>
                                </div>
                                <form method='POST'>
                                    {/* title tag */}
                                    <div className="mt-3 mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Title" value={post.title} name='title' onChange={handleInputes} required />
                                    </div>
                                    {/* sub-title tag */}
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Enter sub-title" value={post.subTitle} name='subTitle' onChange={handleInputes} />
                                    </div>
                                    {/* message tag */}
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="8" placeholder='Enter message' value={post.message} name='message' onChange={handleInputes} ></textarea>
                                    </div>
                                    {/* inputOptionalMessage tag */}
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="8" placeholder='Enter Inputs' value={post.inputOptionalMessage} name='inputOptionalMessage' onChange={handleInputes} ></textarea>
                                    </div>
                                    {/* coding snippet tag */}
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="8" placeholder='Enter coding snippet' value={post.codingSnippet} name='codingSnippet' onChange={handleInputes} ></textarea>
                                    </div>
                                    {/* outputOptionalMessage tag */}
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="3" placeholder='Enter optional message' value={post.outputOptionalMessage} name='outputOptionalMessage' onChange={handleInputes} ></textarea>
                                    </div>
                                    <div className="row">
                                        {/* category tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter category" value={post.category} name='category' onChange={handleInputes} />
                                            </div>
                                        </div>
                                        {/* #tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter #tag" value={post.tag} name='tag' onChange={handleInputes} />
                                            </div>
                                        </div>
                                        {/* mode tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter mode" value={post.mode} name='mode' onChange={handleInputes} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* askingCompany tag */}
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter asking comapines" value={post.askingCompany} name='askingCompany' onChange={handleInputes} />
                                            </div>
                                        </div>
                                        {/* askingYear tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="number" className="form-control" placeholder="Enter asking years by companies" value={post.askingYear} name='askingYear' onChange={handleInputes} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="form-control btn btn-style w-50" value="Upload Post" onClick={sendDataOnBackend} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UploadPost;