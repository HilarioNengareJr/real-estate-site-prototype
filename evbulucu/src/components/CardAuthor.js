import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExpand, faAdd } from '@fortawesome/free-solid-svg-icons';
import './CardAuthor.css';

const CardAuthor = ({ post }) => {
    return (
        <div className="card-footer border">

            <div className="card-author">

                <figure className="author-avatar">
                    <img src="../../public/images/thelogo.png" alt="{post.author}" className="w-100" />
                </figure>

                <div>
                    <p className="author-title">Estate Agent</p>
                    <p className="author-name">
                        <a href="#">{post.username}</a>
                    </p>

                </div>

            </div>

            <div className="card-footer-actions">
                <button class="card-footer-actions-btn">
                    <FontAwesomeIcon icon={faAdd} className='text-secondary'/>
                </button>
                <button className="card-footer-actions-btn">
                    <FontAwesomeIcon icon={faHeart} className='text-secondary' />
                </button>
                <button className="card-footer-actions-btn">
                    <FontAwesomeIcon icon={faExpand} className='text-secondary' />
                </button>
            </div>
        </div>
    );
}

export default CardAuthor;