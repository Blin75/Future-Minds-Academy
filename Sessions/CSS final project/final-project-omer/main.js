let allData = [
    {
        year: "2024",
        name: "Inside Out 2",
        thumb: "inside.jfif",
        reviews: "104"
    },
    {
        year: "2023",
        name: "The Taste of Things",
        thumb: "taste.jfif",
        reviews: "303"
    }
];

const allMovies = document.querySelector("#allMovies");

let recordsHTML = '';
for(let i=0; i<allData.length; i++){
    recordsHTML += "<tr>";
    recordsHTML +=`
                <td>${allData[i].year}</td>
                <td>${allData[i].name}</td>
                <td><img width="50" src="${allData[i].thumb}" alt=""></td>
                <td>${allData[i].reviews}</td>
                <td>
                    <select name="" id="">
                        <option value="">Edit</option>
                        <option value="">Remove</option>
                    </select>
                </td>
    `;
    recordsHTML += "</tr>";
}

allMovies.innerHTML = recordsHTML;