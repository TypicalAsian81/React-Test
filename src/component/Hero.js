import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";

function Hero({ movie }) {
  console.log(movie);
  return (
    <>
    <div>
      
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
    </HeroContainer>

    {/* <div>
    <div className="middle">
                <div className="mid">
                <p>Watch your favourite movies & shows for</p><p><div className="free">FREE!</div></p>
                <h4>Sign Up Today!</h4>
                </div>
            </div>
    </div> */}
       <main class="container">
       <p>Watch Your favourite</p>
       <section class="animation">
       <div class="first"><div>Movies</div></div>
       <div class="second"><div>tv shows</div></div>
       <div class="third"><div>For Free!</div></div>
       </section>
       </main>
    <div className="fame">ORIGINALS</div>
    </div>
    </>
  );
}

export default Hero;