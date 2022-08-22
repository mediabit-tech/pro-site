import React from 'react';
import './uploadPost.css';

const uploadPost = () => {
    return (
        <>
            <section>
                <div className="container custom-container">
                    <div className="row custom-css">
                        {/* left side */}
                        <div className="col-4 custom-scrollbar">
                            <h1>Your All Posts</h1>
                            <div className="mt-3 mb-3">
                                <h6>This is displaying area.</h6>
                            </div>
                        </div>

                        {/* right side */}
                        <div className="col-8">
                        <h1>Create Your New Post</h1>
                            <form>
                                <div className="mt-3 mb-3">
                                    <input type="text" className="form-control" placeholder="Enter your heading" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" rows="8" placeholder='Enter your description' required ></textarea>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Enter your category" required />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Enter your #tag" required />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <select className="mb-3 form-select" required >
                                            <option selected>Choose one</option>
                                            <option value="1">Easy</option>
                                            <option value="2">Medium</option>
                                            <option value="3">Hard</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Enter asking comapines name" required />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <input type="number" className="form-control" placeholder="Enter asking years by companies" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="submit" className="form-control btn btn-style w-100" value="Upload Post" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default uploadPost