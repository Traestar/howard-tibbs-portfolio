import React from "react"
import { Link } from "gatsby"



const BlogBox = () => (

    <div id="blog" className="section accent">
                <div className="w-container">
                    <div className="section-title-group">
                      <Link to="/blog"><h2 className="section-heading centered">Blog</h2></Link>
                        <div className="section-subheading center sasd-asd-as">What Am I doing Now?!</div>
                    </div>
                    <div className="tag-wrapper">
                        <div className="big-article w-row">
                            <div className="big-article-image-wrapper w-col w-col-8 w-col-stack" />
                                <div className="big-article-content-wrapper w-col w-col-4 w-col-stack">
                                    <div className="big-article-title-wrapper">
                                        <div className="tagline-2 tagline-promo-40">Local News</div>
                                        <h2>My First Blog</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                    </div>
                                    <div className="big-article-author-wrapper">
                                        <div className="divider big-article-divider" />
                                        <div className="tagline-2 tagline-promo-40">Howard tibbs</div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                        </div>
                    <div className="w-row">
                        <div className="basic-column w-col w-col-5">
                            <div className="tag-wrapper">
                                <div className="article">
                                    <div className="project-label label-article-grey">
                                        <div className="label-text-2">Projects</div>
                                    </div>
                                    <h2>My Journey</h2>
                                    <div className="tagline-2 tagline-promo-40">howard tibbs</div>
                                    <div className="article-alt-cover article-1-content" />
                                </div>
                                <div className="divider" />
                            </div>
                        </div>
                        <div className="basic-column w-col w-col-7">
                            <div className="tag-wrapper">
                                <div className="article">
                                    <div className="article-alt-cover article-2-content" />
                                    <div className="label label-article-pink">
                                        <div className="label-text-2">Facts</div>
                                    </div>
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                                    <div className="tagline-2 tagline-promo-40">Howard tibbs</div>
                                    </div>
                                    <div className="divider" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
)

export default BlogBox