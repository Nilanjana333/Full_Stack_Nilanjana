document.addEventListener("DOMContentLoaded", function () {
    const movieform=document.getElementById("movieform");
    const movieTable=document.getElementById("movieTable");
    const search=document.getElementById("search");

    if (movieform){
        movieform.addEventListener("submit", function (e) {
            e.preventDefault();
            const movie={
                name: document.getElementById("name").value,
                desc: document.getElementById("desc").value,
                year: document.getElementById("year").value,
                rating:document.getElementById("rating").value,
                genre: document.getElementById("genre").value,
                poster: document.getElementById("poster").value,
            };

            let movies= JSON.parse(localStorage.getItem("movies")) || [];
            movies.push(movie);
            localStorage.setItem("movies", JSON.stringify(movies));
            alert("Added!");
            movieform.reset();
        });
    }

    if (movieTable){
        function load(){
            let movies= JSON.parse(localStorage.getItem("movies")) || [];
            movieTable.innerHTML= movies.map((m,index)=> `
                <tr>
                    <td>${m.name}</td>
                    <td>${m.desc.slice(0,100)}...</td>
                    <td>${m.year}</td>
                    <td>${m.rating}</td>
                    <td>${m.genre}</td>
                    <td><img src="${m.poster}"width="50"></img></td>
                    <td><button onclick="deleteMovie(${index})" id="del">Delete</button></td>
                </tr>
            `).join('');
        }
        load();

        window.deleteMovie=function(index){
            let movies=JSON.parse(localStorage.getItem("movies"));
            movies.splice(index,1);
            localStorage.setItem("movies", JSON.stringify(movies));
            load();
        };
    }

    if(search){
        search.addEventListener("input", function () {
            let filter = search.value.toLowerCase();
            let movies = JSON.parse(localStorage.getItem("movies")) || [];
            let filteredMovies = movies.filter(m => m.name.toLowerCase().includes(filter) || m.genre.toLowerCase().includes(filter));
            movieTable.innerHTML = filteredMovies.map((m, index) => `
                <tr>
                    <td>${m.name}</td>
                    <td>${m.desc.slice(0, 100)}...</td>
                    <td>${m.year}</td>
                    <td>${m.rating}</td>
                    <td>${m.genre}</td>
                    <td><img src="${m.poster}" width="50"></td>
                    <td><button onclick="deleteMovie(${index})">Delete</button></td>
                </tr>
            `).join('');
        });
    }
})