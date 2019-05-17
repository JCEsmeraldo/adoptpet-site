import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button, Col } from 'reactstrap';

const items = [
  {
    src: 'https://dogdaygetaway.com/wp-content/uploads/2017/03/adopt_rescue_dogs-800x400.jpg',
  },
  {
    src: 'https://www.midliferambler.com/wp-content/uploads/2018/03/caninedementia-heading-800x400.jpg',
  },
  {
    src: 'https://skovishpools.com/wp-content/uploads/2018/06/my-dog-in-my-pool-800x400.jpg',
  }
];


class Animal extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img width="600px" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">

        <br />

        <Col xl="7">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          <br />
          <h3>Nome:</h3>
          <p>Luna</p>
          <h3>Idade:</h3>
          <p>6 meses</p>
          <h3>Porte</h3>
          <p>Médio</p>
          <Button color="primary" href="#">Adotar</Button>

        </Col>
      </div>
    );
  }
}


export default Animal;
