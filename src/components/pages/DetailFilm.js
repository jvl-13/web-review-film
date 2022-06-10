import React from 'react'
import TheBatman from '../assets/images/thebatman.jpg'
import './DetailFilm.css'
import Star from '../assets/images/star_16px.png'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function DetailFilm() {
  return (
    <div className='detail-film'>
      <div className='fcontainer'>
        <div className='info'>
          <div className='film'>
            <h2 className='fname'>The Batman</h2>
            <p className='frate'>8<img src={Star} alt='star'/> </p> 
          </div>
          
          <div className='fdate'>
            <p>01/01/2022</p>
          </div>

          <div className='btn-categories'>
            <button className='btn'>Adventure</button>
            <button className='btn'>Mystery</button>
            <button className='btn'>Thriller</button>
          </div>

          <div className='overview fover'>
            <h4 className='title'>Overview : </h4>
            <p className='ftext'>In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</p>
          </div>
        </div>

        <div className='btn-favorite'>
            <button className='favorite' ><FavoriteRoundedIcon style={{ fontSize: '40px', marginTop: '5px' }}/></button>
        </div>
      </div>
      

      <div className='intro'>
          <img className='movie-img' src={TheBatman} alt='movie name' />
          <iframe className='movie-trailer'
          src="https://www.youtube.com/embed/mqqft2x_Aa4"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}    
      </div>

      <div className='all-review'>
        <div className='review'>
          <h2 className='label'>Reviews</h2>

          <div className='add-review'>
            <AccountCircleRoundedIcon style={{ fontSize: '40px'}}/>
            <input type="text" placeholder='Add your reviews here...'></input>
          </div>

          <div className='review-detail'>
            <div className='info-review'>
              <img src={TheBatman} className='author-img' alt='avatar'/>
              <div className='author-info'>
                <p className='author'>Anne Grade</p>
                <p className='date-review'>08/06/2022</p>
              </div>
            </div>
            <div className='detail'>
              <p>This film is so intricate, there's so many details, things you can obverse on multiple watches and not have noticed on your first. There's a lot of things that just aren't spoken that give this film so much substance. So many layers and nuanced story telling. Gotham City feels as it should, as it's own character and a visceral cesspool of corruption and just dirt. It feels dirty, unpolished... it's amazing. There's so many shots in this film that are just simply breathtaking and intentionally dirty. It helps capture this visceral tone and fits substantially well with the universe of Batman.</p>
            </div>
          </div>

          <div className='review-detail'>
            <div className='info-review'>
              <img src={TheBatman} className='author-img' alt='avatar'/>
              <div className='author-info'>
                <p className='author'>Anne Grade</p>
                <p className='date-review'>08/06/2022</p>
              </div>
            </div>
            <div className='detail'>
              <p>I like how Batman is depicted with a naive and loser POV from his rich high tower, a rich trust fund baby called out by both sane (Catwoman) and insane (Riddler) people while he remains oblivious until the consequences are literally flooding the city. While he uses the idea of Batman as a mantle for him to process trauma, his obliviousness to his own celebrity status and image creates unintentional side effects from his parents' death hogging the spotlight away from the people that mattered to his own nebulous idea of "vengeance" being co-opted by the goons, a heel-turn realization that eventually changes the rack focus, ultimately leading to a wider perspective and a selfless act of cutting the cord and helping others. Hope is more important than his idea of justice, in the end, empathy being the missing piece throughout. Instead of being a voyeur like Riddler during his master plan (Riddler binoculars on the mayor, Batman binoculars on Catwoman), he switches to being on the ground to help, no longer from his high castle.</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default DetailFilm