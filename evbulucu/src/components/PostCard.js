import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faBed, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import Images from './Images';
import NavCard from './NavCard';
import './PostCard.css';
import LikeShare from './LikeShare';


const PostCard = () => {
  return (
    <div className='mt-4 border wide border-2 border-lg-only'>
      <Row className="justify-content-center d-flex ">
        <Col xs={12} md={8} lg={12}>
          <Card className='card border-0 border-bottom rounded-0 shadow no-shadow'>
            <LikeShare />
            <div className='border no-border-lg'>
            <Images />
            </div>
            <NavCard />
            <Card.Body>
            <div className="listing-details-heading font-weight-bold text-center"> 
            <span className='bg'><h2 className='text-muted p-3'>$200/month</h2></span>
            <span className='city text-muted d-flex justify-content-start'>
            <h5>Guzelyurt</h5>
            </span>
            </div>
                <div className="listing-details text-muted font-weight-light">
                  <ul className="list-inline">
                    <li className="list-inline-item d-block">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
                      <span className="m-2 detail-value">23 Alpay Basaran sokak</span>
                    </li>
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={faBuilding} className="detail-icon" />
                      <span className="detail-value m-2">Studio - 2 beds! 1-2 Baths</span>
                    </li>
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={faBed} className="detail-icon" />
                      <span className="detail-value m-2">2 rooms Available</span>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center">
                  <button className='btn btn-primary m-2'>
                    <span className='m-1'>
                      <FontAwesomeIcon icon={faUser} className="button-icon" />
                    </span>
                    Request Tour
                  </button>
                  <button className='btn btn-outline-primary m-2'>
                    <span className='m-1'>
                      <FontAwesomeIcon icon={faPhone} className="button-icon" />
                    </span>
                    Call
                  </button>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostCard;
