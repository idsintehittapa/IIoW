import React from 'react';
import './catAnimation.css';

export const CatAnimation = () => {
  return (
    <div className="container">
      <p>More to come...</p>
      <div className="stand"></div>
      <div className="cat">
        <div className="cat__body"></div>
        <div className="cat__head">
          <div className="cat__ear"></div>
          <div className="cat__ear"></div>

          <div className="cat__nose"></div>
          <div className="cat__whiskers-container">
            <div className="cat__whisker"></div>
            <div className="cat__whisker"></div>
          </div>
          <div className="cat__whiskers-container">
            <div className="cat__whisker"></div>
            <div className="cat__whisker"></div>
          </div>
        </div>
        <div className="cat__tail-container">
          <div className="cat__tail">
            <div className="cat__tail">
              <div className="cat__tail">
                <div className="cat__tail">
                  <div className="cat__tail">
                    <div className="cat__tail">
                      <div className="cat__tail">
                        <div className="cat__tail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
