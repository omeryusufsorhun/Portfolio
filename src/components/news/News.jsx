import React from 'react';

function News() {
  return (
    <div>
      <div className="opacity-70">
        <h1 className="mb-5 text-center font-bold text-2xl mb-5">
          Interesting News Around World
        </h1>
        <div className="card-body bg-base-100 shadow bg-opacity-40 m-5 rounded-lg">
          <h5 className="card-title">
            Smiling sunshine: NASA captures shots of coronal holes causing happy
            face on the sun
          </h5>
          <p>
            The coronal holes on the sun's surface are spewing out solar wind
            towards Earth, causing a solar storm which could result in the
            aurora borealis - often called the northern lights - being seen in
            Scotland tonight.
          </p>
          <a
            target="_blank"
            href="https://news.sky.com/story/smiling-sunshine-nasa-captures-shots-of-coronal-holes-causing-happy-face-on-the-sun-12732915"
          >
            Read More...
          </a>
        </div>
        <div className="card-body bg-base-100 shadow bg-opacity-40 m-5 rounded-lg">
          <h5 className="card-title">
            Piet Mondrian artwork New York City I hung upside down for 75 years
          </h5>
          <p>
            A photo from 1944, taken a few days after artist Mondrian's death,
            shows the picture on an easel in his studio in a different
            orientation.
          </p>
          <a
            target="_blank"
            href="https://news.sky.com/story/piet-mondrian-artwork-new-york-city-i-hung-upside-down-for-75-years-12732507"
          >
            Read More...
          </a>
        </div>
        <div className="card-body bg-base-100 shadow bg-opacity-40 m-5 rounded-lg">
          <h5 className="card-title">
            Video Of The Day: Former Prisoner Feels Like He’s Time Traveled
            After Being Released
          </h5>
          <p>
            “I had seen that everybody, or the majority of the people, were
            talking to themselves. Then I looked closer and they seemed to have
            things in their ears–with the phone things. iPhones, they call them,
            or something like that? And I thought to my mind, what, everybody
            became CIA or agents and stuff like that?”
          </p>
          <a
            target="_blank"
            href="https://allthatsinteresting.com/life-after-prison"
          >
            Read More...
          </a>
        </div>
        <div className="card-body bg-base-100 shadow bg-opacity-40 m-5 rounded-lg">
          <h5 className="card-title">
            Attorney Who Fought Against Florida’s Helmet Laws Dies In A
            Motorcycle Crash — Because He Wasn’t Wearing A Helmet
          </h5>
          <p>
            Ron Smith and his girlfriend both died due to blunt head trauma
            while riding with a group of bikers through Pinellas County, Florida
            in August 2022.
          </p>
          <a
            target="_blank"
            href="https://allthatsinteresting.com/ron-smith-motorcycle-crash"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
