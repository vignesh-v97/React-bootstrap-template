import React from 'react';
import Divider from './components/Divider';
import PortfolioCard from './components/PortfolioCard';

function Portfolio() {
 return (
  <div>
   <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/* Portfolio Section Heading*/}
            <h2 className="mb-0 text-center page-section-heading text-uppercase text-secondary">Portfolio</h2>
            {/* Icon Divider*/}
            <Divider/>
            {/* Portfolio Grid Items*/}
            <div className="row justify-content-center">
              {/* Portfolio Item 1*/}
              <PortfolioCard portFolioImg="assets/img/portfolio/cabin.png"/>
              {/* Portfolio Item 2*/}
              <PortfolioCard portFolioImg="assets/img/portfolio/cake.png"/>
              {/* Portfolio Item 3*/}
              <PortfolioCard portFolioImg="assets/img/portfolio/circus.png"/>
              {/* Portfolio Item 4*/}
              <PortfolioCard portFolioImg="assets/img/portfolio/game.png"/>
              {/* Portfolio Item 5*/}
              <PortfolioCard portFolioImg="assets/img/portfolio/safe.png"/>
              {/* Portfolio Item 6*/}
              <PortfolioCard portFolioImg="assets/img/portfolio/submarine.png"/>
            </div>
          </div>
        </section>
  </div>
 )
}

export default Portfolio
