function Video() {
    return (
        <div>
            <h2>Vídeo</h2>
            <video width="640" height="360" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video