import React from 'react'
import FooterSvg from "../../../../public/icons/footer-svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-card">
                    <span>©2024 EEFF - Energy Efficiency Financing Facility. All Rights Reserved</span>

                    <img
                        className="footer-card__img1"
                        src="/assets/images/footer.jpg"
                        alt=""
                    />
                    <FooterSvg />
                    {/*<img*/}
                    {/*    className="footer-card__img"*/}
                    {/*    src="/assets/images/logo1.png"*/}
                    {/*    alt=""*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    )
}

export default Footer
