import React from 'react';

class Detail extends React.Component {
  componentDidMount(){
    const {location, history} = this.props;
    if(location.state === undefined) {
      history.push('/');
    }
  }

  render(){
    const {state} = this.props.location;
    if(!state) return null;
    const {title, year, rating, summary, poster} = state;

    return (
      <section>
        <h1>{title}</h1>
        <div>{year}</div>
        <div>{rating}</div>
        <p>{summary}</p>
        <img src={poster} alt={title} />
      </section>
    )
  }
}

export default Detail;