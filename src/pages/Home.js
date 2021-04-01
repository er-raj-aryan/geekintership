import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import MovieList from './MovieList'


function Home() {
    return (
        <div className='home' >
            <Grid container spacing={2} style={{display:"flex", justifyContent:'center',margin: 10}}>
                <Grid item >
                    <MovieList 
                    img="https://www.scified.com/articles/fan-made-godzilla-vs-kong-poster-spdrmnkyxxiii-32.jpg"
                    movieTitle="King Kong"
                    />
                </Grid>
                <Grid item >
                    <MovieList
                    img="https://www.wallpaperflare.com/static/505/614/362/movies-german-movie-poster-wallpaper.jpg"
                    movieTitle="Who Am I" />
                </Grid>
                <Grid item >
                    <MovieList
                    img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aac57a29688377.55ffa78f025a6.jpg"
                    movieTitle="Mr. Robot"  
                    />
                </Grid>

            </Grid>
            <Link style={{display:'flex',textDecoration:'none',justifyContent:'center'}} to='/'>
            <Button variant="contained" color="primary" >Logout</Button></Link> 

        </div>
        
    )
}

export default Home
