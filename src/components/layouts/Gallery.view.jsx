//-------------------------------------------------------------------------------------------
// File: Gallery.jsx
//
// Desc: Componente React per l'inizializzazione e la gestione di una galleria di elementi
//       Ogni elemento viene creato tramite un componente template presente in props.children
// Path: /src/components/layouts/Gallery
//-------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as prevArrow from '../../../public/icons/ic-arrow-left.svg';
import * as nextArrow from '../../../public/icons/ic-arrow-right.svg';

import '../../styles/layouts/Gallery.style.scss';


class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
    this.makeSlides = this.makeSlides.bind(this);
  }

  // Visualizza la slide precedente
  onPrev() {
    const { itemVisible } = this.props;
    let { currentIndex } = this.state;

    if (currentIndex <= 0) {
      return;
    }

    currentIndex -= itemVisible;

    this.setState({ currentIndex });
  }

  // Visualizza la slide successiva
  onNext() {
    const { list, itemVisible } = this.props;
    let { currentIndex } = this.state;

    if (currentIndex >= list.length - 1) {
      return;
    }

    currentIndex += itemVisible;

    this.setState({ currentIndex });
  }

  // genera le slide (il gruppo di elementi a video) e gli elementi da esse contenuti
  // gli elementi sono creati partendo dal template indicato da props.children
  makeSlides() {
    const {
      list,
      itemVisible,
      children,
    } = this.props;

    const slides = [];

    for (let j = 0; j < list.length / itemVisible; j++) {
      let items = [];

      for(let k = 0; k < itemVisible; k++) {
        const objProps = list[j * itemVisible + k];

        items.push(
          <div className="gallery__slide-item" key={`slide-${k}`}>
            {children(objProps)}
          </div>
        );
      }

      slides.push(
        <div className="gallery__slide" key={`slide-${j}`}>
          {items}
        </div>
      );
    }

    return slides;
  }

  // render della gallery
  render() {
    const {
      list,
      itemVisible,
      className,
    } = this.props;

    let { currentIndex } = this.state;

    const mergedClass = `gallery ${className}`;

    const Slides = this.makeSlides();

    const left = 100 * (currentIndex / itemVisible);
    const style = { left: `-${left}%` };

    return (
      <div className={mergedClass}>
        <div className="gallery__box-arrow gallery__box-arrow--prev">
          {currentIndex > 0 && (
            <button className="gallery__button" type="button" onClick={this.onPrev}>
              <img className="gallery__button-icon" src={prevArrow} alt="prev" />
            </button>
          )}
        </div>
        <div className="gallery__box-slides">
          <div className="gallery__slides-tape" style={style}>
            {Slides}
          </div>
        </div>
        <div className="gallery__box-arrow gallery__box-arrow--next">
          {(currentIndex + itemVisible) < list.length && (
            <button className="gallery__button" type="button" onClick={this.onNext}>
              <img className="gallery__button-icon" src={nextArrow} alt="next" />
            </button>
          )}
        </div>
      </div>
    );
  }
}


Gallery.propTypes = {
  children: PropTypes.func.isRequired, // template degli elementi della slide
  list: PropTypes.arrayOf(PropTypes.object).isRequired, // lista dei dati necessari a crostruire gli elementi della gallery
  className: PropTypes.string, // css class
  itemVisible: PropTypes.number, // numero di elementi contenuti all'interno di una singola slide
};

Gallery.defaultProps = {
  className: '',
  itemVisible: 3,
};


export default Gallery;
